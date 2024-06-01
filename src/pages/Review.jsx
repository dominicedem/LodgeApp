import styled from "styled-components";

const ReviewStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f00;
  font-size: 3rem;
`;
function Review() {
  return <ReviewStyle>ReviewStyle</ReviewStyle>;
}

export default Review;
