import styled from "styled-components";
import { TiStar } from "react-icons/ti";

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
const StarBox = styled.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
`;
const StarIcon = {
  color: "var(--star_Icon_color)",
  width: "1.4rem",
  height: "1.4rem",
};
const StarIconfill = {
  color: "var(--primary_text_color)",
  width: "1.4rem",
  height: "1.4rem",
};
function Rating() {
  const rating = 4;
  return (
    <RatingStyle>
      <ProfileBox>
        <ImgBox>
          <Img src="/imgProfile.png" alt="profile_logo" />
        </ImgBox>
        <TextBox>
          <Text type="head">Agbarakwe chukwu</Text>
          <StarBox>
            {Array.from({ length: 5 }).map((_, ind) => (
              <>
                {ind < rating ? (
                  <TiStar style={StarIconfill} />
                ) : (
                  <TiStar style={StarIcon} />
                )}
              </>
            ))}
            <Text
              style={{
                fontSize: "1rem",
                marginLeft: "1rem",
              }}
            >
              3 months ago
            </Text>
          </StarBox>
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
