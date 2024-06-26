import styled from "styled-components";
import { TiStar } from "react-icons/ti";
import Button from "./Button";
import Rating from "../features/Ratings/Rating";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const ReviewStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  gap: 3rem;
`;
const RatingStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.4rem;
`;
const ReviewText = styled.span`
  font-size: 1.8rem;
  color: var(--primary_text_color);
  font-weight: bold;
`;
const ReviewBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 2rem;
`;
const RatingCon = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;
const ReviewHead = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const StarIcon = {
  color: "var(--primary_text_color)",
  width: "1.8rem",
  height: "1.8rem",
};
const linkStyle = {
  textDecoration: "none",
  color: "inherit",
};
function Review() {
  const { hostel, School, roomate } = useSelector((state) => state.filterData);
  return (
    <ReviewStyle>
      <ReviewBox>
        <ReviewHead>
          {hostel && <ReviewText>Review ( 47 )</ReviewText>}
          {School && <ReviewText>Comment ( 47 )</ReviewText>}
          {hostel && (
            <RatingStyle>
              <TiStar style={StarIcon} /> 4.05
            </RatingStyle>
          )}
        </ReviewHead>
        <Button width="20%" padding=".3rem" font="1.6rem">
          <Link style={linkStyle} link to="/moredetails">
            See all
          </Link>
        </Button>
      </ReviewBox>
      <RatingCon>
        {Array.from({ length: 4 }).map((_, ind) => (
          <Rating key={ind} />
        ))}
      </RatingCon>
    </ReviewStyle>
  );
}

export default Review;
