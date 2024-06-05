import styled from "styled-components";
import StarRating from "./StarRating";

const ReviewDetailsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  padding-bottom: 4rem;
  border-bottom: 0.1rem solid var(--secondary_text_faint);
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;
const Grade = styled.div`
  display: grid;
  width: 100%;
  height: 30vh;
`;
const Text = styled.span`
  font-weight: ${(props) => (props.type === "head" ? "bold" : "none")};
  font-size: ${(props) => (props.type === "head" ? "2.2rem" : "1.6rem")};
  color: ${(props) =>
    props.type === "head"
      ? "var(--secondary_text)"
      : "var(--faint_text_black)"};
`;

function ReviewDetails() {
  return (
    <ReviewDetailsStyle>
      <Text type="head">Reviews</Text>
      <Details>
        <Text style={{ fontSize: "3.2rem", color: "var(--signin_text_color)" }}>
          4.82
        </Text>
        <StarRating
          rate={3}
          size="2.8rem"
          color="var(--signin_text_color_faint)"
        />
        <Text>based on 42 reviews</Text>
      </Details>
      <Grade></Grade>
    </ReviewDetailsStyle>
  );
}

export default ReviewDetails;
