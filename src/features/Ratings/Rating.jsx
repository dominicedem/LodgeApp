import styled from "styled-components";
import { TiStar } from "react-icons/ti";
import StarRating from "../../ui/StarRating";
import { useSelector } from "react-redux";

const RatingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`;

const Text = styled.span`
  font-size: ${(props) => (props.type === "review" ? "1.4rem" : "1.6rem")};
  color: ${(props) =>
    props.type === "subhead"
      ? "var(--secondary_text)"
      : "var(--primary_text_color)"};
  /* font-weight: ${(props) => (props.type === "subhead" ? "none" : "bold")}; */
`;

const ImgBox = styled.div`
  width: 13%;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.2rem;
  height: 100%;
`;
const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.6rem 0;
`;
const StarBoxDetails = styled.div`
  display: flex;
  align-items: end;
  gap: 1.5rem;
`;
function Rating() {
  const { hostel } = useSelector((state) => state.filterData);

  return (
    <RatingStyle>
      <ProfileBox>
        <ImgBox>
          <Img src="/imgProfile.png" alt="profile_logo" />
        </ImgBox>
        <TextBox>
          <Text type="head">Agbarakwe chukwu</Text>
          <StarBoxDetails>
            {hostel && <StarRating rate={4} />}
            <Text
              style={{
                fontSize: "1rem",
              }}
            >
              3 months ago
            </Text>
          </StarBoxDetails>
        </TextBox>
      </ProfileBox>
      <Text type="review">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
        dignissimos sapiente aliquid fugiat quo dolorum minus quisquam
        repellendus explicabo, veniam ducimus libero et illo non nisi porro
        corporis similique. Distinctio.
      </Text>
    </RatingStyle>
  );
}

export default Rating;
