import styled from "styled-components";
import Nav from "./Nav";
import MenuBar from "./MenuBar";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

const ApplayoutStyle = styled.div`
  background-color: var(--appbackgroundcolor);
  position: relative;
`;
const NavStyle = styled.div`
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;
const MenuBarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  background: var(--menubackgroundcolor);
  z-index: 1000;
  transition: all 0.3s ease-in;
  height: 100vh;
  width: 100vw;
  backdrop-filter: blur(5px);
  @media (min-width: 600px) {
    display: none;
  }
`;
const PageStyle = styled.div``;
const openMenuBar = {
  transform: "translateX(0)",
};
const closeMenuBar = {
  transform: "translateX(-100%)",
};
function Applayout() {
  const { openMenu } = useSelector((state) => state.menuData);
  return (
    <ApplayoutStyle>
      <NavStyle>
        <Nav />
      </NavStyle>
      <MenuBarStyle style={openMenu ? closeMenuBar : openMenuBar}>
        <MenuBar />
      </MenuBarStyle>
      <PageStyle>
        <Outlet />
      </PageStyle>
    </ApplayoutStyle>
  );
}

export default Applayout;
