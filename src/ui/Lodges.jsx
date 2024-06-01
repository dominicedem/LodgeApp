import styled from "styled-components";
import { TiStar } from "react-icons/ti";
import { GrFormLocation } from "react-icons/gr";

const LodgesStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 0.5rem;
  box-shadow: 0 0.5rem 1rem 0.5rem #0001;
`;
const LodgeDes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 0.5rem;
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
  transform: ${(props) =>
    props.type === "head" ? "translateX(0)" : "translateX(-8%)"};
  color: ${(props) =>
    props.type === "head"
      ? "var(--primary_text_color)"
      : "var(--signin_text_color)"};
  font-size: ${(props) => (props.type === "head" ? "1.8rem" : "1.4rem")};
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
`;
const locationIcon = {
  color: "var(--signin_text_color)",
  width: "2.4rem",
  height: "2.4rem",
};
const StarIcon = {
  //   color: "var(--signin_text_color)",
  color: "var(--primary_text_color)",
  width: "2.4rem",
  height: "2.4rem",
};
function Lodges({ img }) {
  return (
    <LodgesStyle>
      <Img src={`/${img}`} />
      <LodgeDes>
        <LocationBox>
          <Text type="head">Andy's villa</Text>
          <Text>
            <GrFormLocation style={locationIcon} /> Eziobodo
          </Text>
        </LocationBox>
        <Rating>
          <TiStar style={StarIcon} /> 4.05
        </Rating>
      </LodgeDes>
      <Text type="head">
        <span style={{ textDecoration: "line-through" }}>N</span>180,000
      </Text>
    </LodgesStyle>
  );
}

export default Lodges;
