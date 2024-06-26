import styled from "styled-components";

const LoadingStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
function Loading() {
  return <LoadingStyle>Loading</LoadingStyle>;
}

export default Loading;
