import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../ui/SearchBar";
import Filter from "../ui/Filter";
import Lodges from "../ui/Lodges";

const HomeStyle = styled.div`
  /* display: flex; */
  position: relative;
  background-color: var(--appbackgroundcolor);
  width: 100vw;
  padding: 21rem 0 4rem 0;
`;

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  margin-top: -0.5rem;
`;

const SearcBarBox = styled.div`
  position: fixed;
  background: var(--appbackgroundcolor);
  width: 100vw;
  top: 5rem;
  left: 0;
  padding-top: 2.5rem;
  z-index: 100;
`;

const Filterbox = styled.div`
  padding: 0 1.5rem;
`;

const LodgeBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 6rem;
`;

const Test = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  padding: 0 1.5rem;
  gap: 7rem;
  width: 100%;
  margin-top: 2rem;
`;

const linkStyle = {
  textDecoration: "none",
  color: "var(--primary_text_color)",
  fontSize: "2rem",
};
function Home() {
  return (
    <HomeStyle>
      <SearcBarBox>
        <SearchBar />
      </SearcBarBox>
      <HomeBox>
        <Filterbox>
          <Filter />
        </Filterbox>
        <LodgeBox>
          <Lodges />
          <Lodges />
          <Lodges />
          <Lodges />
        </LodgeBox>
      </HomeBox>
      <Test>
        <Link style={linkStyle} to="signin">
          SignIn
        </Link>
        <Link style={linkStyle} to="verifyemail">
          Verify-email
        </Link>
      </Test>
    </HomeStyle>
  );
}

export default Home;
