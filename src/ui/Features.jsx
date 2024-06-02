import { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const FeaturesStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color: var(--feature_background);
  width: 90%;
  gap: 2rem;
  padding: 1rem;
  border-radius: 0.5rem;
`;
const FeatureListCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  gap: 1rem;
`;
const FeatureListBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
const Input = styled.input`
  width: 1.35rem;
  height: 1.35rem;
  cursor: pointer;
  accent-color: #5454544c;
  /* accent-color: var(--star_Icon_color); */
`;
const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.6rem;
  color: var(--primary_text_color);
`;
const featuresData = [
  {
    type: "Personal Transformer",
    checked: true,
  },
  {
    type: "Fan Ensuite",
    checked: false,
  },
  {
    type: "Waterunning inside",
    checked: true,
  },
  {
    type: "Good Ligthing",
    checked: false,
  },
  {
    type: "Solar system to pump water",
    checked: true,
  },
  {
    type: "Good environment",
    checked: false,
  },
  {
    type: "Quiet and peacful",
    checked: true,
  },
  {
    type: "Pool and lounch",
    checked: true,
  },
  {
    type: "Air conditioning",
    checked: false,
  },
];

const iconStyle = {
  width: "2rem",
  height: "2rem",
  color: "var(--primary_text_color)",
};
function Features() {
  const [collapse, setCollapse] = useState(true);
  return (
    <FeaturesStyle>
      <Text>Features</Text>
      <FeatureListCon>
        {featuresData.map((val, ind) => (
          <>
            {collapse && ind < 4 && <FeatureList data={val} key={ind} />}
            {!collapse && <FeatureList data={val} key={ind} />}
          </>
        ))}
      </FeatureListCon>
      {collapse ? (
        <Text onClick={() => setCollapse((el) => !el)}>
          See more <IoIosArrowDown style={iconStyle} />
        </Text>
      ) : (
        <Text onClick={() => setCollapse((el) => !el)}>
          See less <IoIosArrowUp style={iconStyle} />
        </Text>
      )}
    </FeaturesStyle>
  );
}

function FeatureList({ data }) {
  return (
    <FeatureListBox>
      <Input type="checkbox" checked={data.checked} />
      <Text>{data.type}</Text>
    </FeatureListBox>
  );
}

export default Features;
