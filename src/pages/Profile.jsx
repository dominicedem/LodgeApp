import styled from "styled-components";
import Button from "../ui/Button";
import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import UserAds from "../ui/UserAds";

const ProfileStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  position: relative;
`;
const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 1.5rem;
  padding-bottom: 1rem;
  padding-top: 70%;
  border-bottom: 0.1rem solid var(--secondary_text_faint);
`;
const Img = styled.img`
  width: ${(props) => (props.type === "ads" ? "60%" : "40%")};
  height: ${(props) => (props.type === "ads" ? "90%" : "45%")};
  border-radius: 50%;
`;

const Name = styled.span`
  margin-top: ${(props) => (props.type === "head" ? "-.5rem" : "-1.5rem")};
  margin-bottom: ${(props) => (props.type === "head" ? "0" : "1.2rem")};
  font-size: ${(props) => (props.type === "head" ? "2.6rem" : "1.6rem")};
  color: ${(props) =>
    props.type === "head"
      ? " var(--signin_text_color)"
      : "var(--faint_text_black)"};
`;
const CloseMenu = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  cursor: pointer;
  gap: 0.5rem;
  font-size: 1.8rem;
  top: 3%;
  left: 3%;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--tertiary_text_faint);
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
`;
const AdsSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 1rem 1rem 3rem 1rem;
  gap: 2rem;
`;
const Span = styled.span`
  font-size: 2rem;
  color: var(--faint_text_black);
  font-weight: bold;
  align-self: start;
`;
const closeIcon = {
  color: "var(--primary_text_color)",
  width: "2.4rem",
  height: "2.4rem",
  marginLeft: "-.1rem",
};
function Profile() {
  const navigate = useNavigate();
  return (
    <ProfileStyle>
      <CloseMenu onClick={() => navigate(-1)}>
        <IconBox>
          <IoChevronBack style={closeIcon} />
        </IconBox>
        Back
      </CloseMenu>
      <ProfileBox>
        <Img src="/imgProfile.png" alt="profilelogo" />
        <Name type="head">Username</Name>
        <Name>Useremail@gmail.com</Name>
        <Button type="background" width="80%">
          Edit profile
        </Button>
        <Button width="80%">Change password</Button>
      </ProfileBox>
      <AdsSection>
        <Span>My Ads</Span>
        {/* <UserAds /> */}
        <Img type="ads" src="/emptyAds.png" alt="addslogo" />
      </AdsSection>
    </ProfileStyle>
  );
}

export default Profile;
