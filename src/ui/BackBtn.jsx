import { IoChevronBack } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const CloseMenu = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
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
const closeIcon = {
  color: "var(--primary_text_color)",
  width: "2.4rem",
  height: "2.4rem",
  marginLeft: "-.1rem",
};
function BackBtn() {
  const navigate = useNavigate();
  return (
    <CloseMenu onClick={() => navigate(-1)}>
      <IconBox>
        <IoChevronBack style={closeIcon} />
      </IconBox>
      Back
    </CloseMenu>
  );
}

export default BackBtn;
