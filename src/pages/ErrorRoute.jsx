import styled from "styled-components";

const ErrorStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  font-size: 3rem;
  font-weight: bold;
  color: var(--blacktextcolor);
  background-color: var(--appbackgroundcolor);
`;
function ErrorRoute() {
  return <ErrorStyle>Page not found:) 😢</ErrorStyle>;
}

export default ErrorRoute;
