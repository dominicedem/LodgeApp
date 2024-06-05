import styled from "styled-components";
import Review from "../ui/Review";
import Lodges from "../ui/Lodges";
import Features from "../ui/Features";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import Comment from "../ui/Comment";
import { useSelector } from "react-redux";

const LodgeDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100vw;
  padding-bottom: 3rem;
  position: relative;
  background-color: var(--appbackgroundcolor);
`;
const LodgeStyle = styled.div`
  width: 100%;
`;
const FeaturesStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 4rem 0 5rem 0;
  border-bottom: 1px solid var(--inputField_border);
`;
const ReviewStyle = styled.div`
  width: 100%;
`;
const CommentBox = styled.div`
  width: 100%;
`;
const Cancel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1rem;
  left: 2%;
  background: #dcdcdc21;
  backdrop-filter: blur(5px);
  z-index: 100;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;
const iconStyle = {
  width: "2rem",
  height: "2rem",
  color: "var(--white_text)",
};
const linkStyle = {
  textDecoration: "none",
};
function LodgeDetails() {
  const { hostel, School, roomate } = useSelector((state) => state.filterData);
  return (
    <LodgeDetailsStyle>
      <LodgeStyle>
        {hostel && (
          <Lodges
            radius="false"
            padding="0 2rem"
            // right="rate"
            filter="hostel"
          />
        )}
        {School && (
          <Lodges
            radius="false"
            padding="0 2rem"
            // right="comment"
            filter="school"
          />
        )}
      </LodgeStyle>
      <FeaturesStyle>
        <Features />
      </FeaturesStyle>
      <ReviewStyle>
        <Review />
      </ReviewStyle>
      <CommentBox>
        <Comment />
      </CommentBox>
      <Link style={linkStyle} to="/">
        <Cancel>
          <IoIosArrowBack style={iconStyle} />
        </Cancel>
      </Link>
    </LodgeDetailsStyle>
  );
}

export default LodgeDetails;
