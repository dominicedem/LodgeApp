import styled from "styled-components";
import { useMyPosition } from "../hooks/getCurrenPosition";
import { IoIosArrowDown } from "react-icons/io";
const ButtonStyle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: ${(props) =>
    props.type === "background" ? "var(--signin_text_color)" : "inherit"};
  color: ${(props) =>
    props.type === "background"
      ? "var(--white_text)"
      : "var(--faint_text_black)"};
  padding: 1rem 1.5rem;
  border-radius: 0.7rem;
  font-size: 1.8rem;
  border: ${(props) =>
    props.type === "background"
      ? "none"
      : "1px solid var(--inputField_border)"};
  /* box-shadow: 0 1rem 1rem 0.5rem #0002; */
`;
const iconStyle = {
  width: "2rem",
  height: "2rem",
  color: "var(--primary_text_color)",
};
function Button({
  type,
  children,
  width,
  padding,
  font,
  backgroundColor,
  color,
  arrow,
}) {
  const { isLoading } = useMyPosition();
  return (
    <ButtonStyle
      type={type}
      style={{
        width: `${width}`,
        padding: `${padding}`,
        fontSize: `${font}`,
        background: `${backgroundColor}`,
        color: `${color}`,
      }}
    >
      {!isLoading ? children : "Loading..."}{" "}
      {arrow ? <IoIosArrowDown style={iconStyle} /> : null}
    </ButtonStyle>
  );
}

export default Button;
