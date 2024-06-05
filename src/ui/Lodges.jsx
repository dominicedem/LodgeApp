import styled from "styled-components";
import { TiStar } from "react-icons/ti";
import { TiLocation } from "react-icons/ti";
import LodgeSlider from "./LodgeSlider";
import { TfiCommentAlt } from "react-icons/tfi";

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
  transform: ${(props) =>
    props.type === "icon" ? "translateX(-5%)" : "translateX(0)"};
  color: ${(props) =>
    props.type === "head"
      ? "var(--primary_text_color)"
      : "var(--faint_text_black)"};
  font-size: ${(props) => (props.type === "head" ? "2rem" : "1.4rem")};
`;
const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.4rem;
`;
const School = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;
const locationIcon = {
  color: "var(--faint_text_black)",
  width: "1.8rem",
  height: "1.8rem",
};
const starIcon = {
  color: "var(--primary_text_color)",
  width: "1.8rem",
  height: "1.8rem",
};
const commentIcon = {
  color: "var(--primary_text_color)",
  width: "1.2rem",
  height: "1.2rem",
};

function Lodges({ radius, padding, right, filter }) {
  return (
    <LodgesStyle>
      <LodgeSlider radius={radius} />
      <LodgeDes style={{ padding: `${padding}` }}>
        <LocationBox>
          <Text type="head">Andy's villa</Text>
          {filter === "hostel" ? (
            <>
              <Text type="icon">
                <TiLocation style={locationIcon} /> Eziobodo
              </Text>
              <Text>A room self contain</Text>
            </>
          ) : (
            <School>
              <Text>Department</Text>
              <Text type="icon">
                <TiLocation style={locationIcon} /> Futo
              </Text>
            </School>
          )}
        </LocationBox>
        {right === "rate" ? (
          <Rating>
            <TiStar style={starIcon} /> 4.05
          </Rating>
        ) : right === "comment" ? (
          <Rating>
            200 <TfiCommentAlt style={commentIcon} />
          </Rating>
        ) : null}
      </LodgeDes>
      {filter === "hostel" && (
        <Text
          style={{
            fontSize: "1.7rem",
            marginTop: "-.5rem",
            padding: `${padding}`,
          }}
          type="head"
        >
          <span style={{ textDecoration: "line-through" }}>N</span>180,000
        </Text>
      )}
    </LodgesStyle>
  );
}

export default Lodges;
