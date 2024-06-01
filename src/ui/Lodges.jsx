import styled from "styled-components";
import { TiStar } from "react-icons/ti";
import { TiLocation } from "react-icons/ti";
import LodgeSlider from "./LodgeSlider";

const LodgesStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2rem;
`;
const LodgeDes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
  margin-top: -1rem;
`;
const LocationBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.1rem;
`;
const Text = styled.span`
  display: flex;
  align-items: center;
  /* font-weight: ${(props) => (props.type === "head" ? "bold" : "0")}; */
  transform: ${(props) =>
    props.type === "head" ? "translateX(0)" : "translateX(-8%)"};
  color: ${(props) =>
    props.type === "head"
      ? "var(--primary_text_color)"
      : "var(--signin_text_color)"};
  font-size: ${(props) => (props.type === "head" ? "2rem" : "1.4rem")};
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.4rem;
`;
const locationIcon = {
  color: "var(--signin_text_color)",
  width: "1.8rem",
  height: "1.8rem",
};
const StarIcon = {
  color: "var(--primary_text_color)",
  width: "1.8rem",
  height: "1.8rem",
};
function Lodges() {
  return (
    <LodgesStyle>
      <LodgeSlider />
      <LodgeDes>
        <LocationBox>
          <Text type="head">Andy's villa</Text>
          <Text>
            <TiLocation style={locationIcon} /> Eziobodo
          </Text>
        </LocationBox>
        <Rating>
          <TiStar style={StarIcon} /> 4.05
        </Rating>
      </LodgeDes>
      <Text style={{ fontSize: "1.7rem", marginTop: "-.5rem" }} type="head">
        <span style={{ textDecoration: "line-through" }}>N</span>180,000
      </Text>
    </LodgesStyle>
  );
}

export default Lodges;
