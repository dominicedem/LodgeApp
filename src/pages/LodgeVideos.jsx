import { Link } from "react-router-dom";
import styled from "styled-components";

const linkStyle = {
  textDecoration: "none",
  width: "100%",
  color: "var(--primary_text_color)",
};

const LodgeVideosStyle = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--appbackgroundcolor);
`;
function LodgeVideos() {
  return <LodgeVideosStyle>LodgeVideos</LodgeVideosStyle>;
}

export default LodgeVideos;
