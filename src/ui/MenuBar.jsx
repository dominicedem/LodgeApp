import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaHomeSolid } from "react-icons/lia";
import { LuUsers2 } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { toggleMenu } from "../Slices/MenuSlice";
import { useDispatch } from "react-redux";
import { PiUsersThree } from "react-icons/pi";
import { HiArrowRightOnRectangle } from "react-icons/hi2";
import { RxCross1 } from "react-icons/rx";

const MenuBarBox = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-top: 4rem;
  position: relative;
`;

const MenuTextBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  margin-top: -5%;
`;
const CloseMenu = styled.div`
  position: absolute;
  top: 3%;
  right: 3%;
`;

const Text = styled.span`
  font-size: ${(props) => (props.type === "subhead" ? "1.4rem" : "1.8rem")};
  color: ${(props) =>
    props.type === "subhead"
      ? "var(--secondary_text)"
      : "var(--primary_text_color)"};
  font-weight: ${(props) => (props.type === "subhead" ? "none" : "bold")};
`;
const Img = styled.img`
  width: 18%;
  border-radius: 0.5rem;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
`;
const ProfileBox = styled.div`
  display: flex;
  align-items: start;
  gap: 1rem;
  width: 100%;
  padding: 1.6rem 2rem;
  border-bottom: 0.1rem solid var(--secondary_text_faint);
`;
const MenuText = styled.span`
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: 1.4rem 2rem;
  transition: all 0.2s;
`;
const IconStyle = {
  color: "var(--primary_text_color)",
  width: "2.5rem",
  height: "2.5rem",
};
const signInIconStyle = {
  color: "var(--signin_text_color)",
  width: "2.5rem",
  height: "2.5rem",
};
const linkStyle = {
  textDecoration: "none",
  width: "100%",
  color: "var(--primary_text_color)",
};

function MenuBar() {
  const dispatch = useDispatch();
  function handleClose() {
    dispatch(toggleMenu(true));
  }
  return (
    <MenuBarBox>
      <ProfileBox>
        <Img src="/imgProfile.png" alt="profile_logo" />
        <TextBox>
          <Text type="head">User</Text>
          <Text type="subhead">useremail@gmail.com</Text>
        </TextBox>
      </ProfileBox>
      <MenuTextBox>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="/">
          <MenuText>
            <LiaHomeSolid style={IconStyle} />
            Hostels
          </MenuText>{" "}
        </NavLink>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="/h">
          <MenuText>
            <IoSchoolOutline style={IconStyle} />
            School
          </MenuText>{" "}
        </NavLink>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="/j">
          <MenuText>
            <LuUsers2 style={IconStyle} />
            Get a roomate
          </MenuText>{" "}
        </NavLink>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="/profile">
          <MenuText>
            <CgProfile style={IconStyle} />
            Profile
          </MenuText>{" "}
        </NavLink>
        <NavLink onClick={() => handleClose()} style={linkStyle} to="/g">
          <MenuText>
            <PiUsersThree style={IconStyle} />
            Team
          </MenuText>{" "}
        </NavLink>
      </MenuTextBox>
      <NavLink onClick={() => handleClose()} style={linkStyle} to="review">
        <MenuText className="signin">
          <HiArrowRightOnRectangle style={signInIconStyle} />
          Sign In
        </MenuText>
      </NavLink>
      <CloseMenu onClick={() => handleClose()}>
        <RxCross1 style={IconStyle} />
      </CloseMenu>
    </MenuBarBox>
  );
}

export default MenuBar;
