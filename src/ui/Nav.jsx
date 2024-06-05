import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { toggleMenu } from "../Slices/MenuSlice";
import { SlMenu } from "react-icons/sl";
import { setHome } from "../Slices/FilterSlice";
// import { AiOutlineClose } from "react-icons/ai";

const NavStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background: var(--appbackgroundcolor);
`;
const Companydescription = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
`;
const CompanyLogo = styled.img`
  width: 3.5rem;
  height: 3.5rem;
  /* border-radius: 50%; */
  /* @media (max-width: 575px) {
    width: 4rem;
  } */
`;
const CompanyName = styled.div`
  background-clip: text;
  background: -webkit-linear-gradient(#217fd7, #3e3e3e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2.4rem;
`;
const LinkStyle = {
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  gap: "0.5rem",
};
const Menu = styled.span`
  display: inline-block;
  @media (min-width: 600px) {
    display: none;
  }
`;
const MenuStyle = {
  color: "var(--primary_text_color)",
  width: "2.5rem",
  height: "2.5rem",
};
function Nav() {
  // const { openMenu } = useSelector((state) => state.menuData);
  const dispatch = useDispatch();
  return (
    <NavStyle>
      <Companydescription onClick={() => dispatch(setHome(true))}>
        <Link style={LinkStyle} to="/">
          <CompanyLogo src="/dlogo.png" alt="logo" />
          <CompanyName>DLodge</CompanyName>
        </Link>
      </Companydescription>

      <Menu onClick={() => dispatch(toggleMenu(false))}>
        <SlMenu style={MenuStyle} />
      </Menu>
      {/* ) : (
        <Menu onClick={() => dispatch(toggleMenu(true))}>
          <AiOutlineClose style={MenuStyle} />
        </Menu>
      )} */}
    </NavStyle>
  );
}

export default Nav;
