import styled from "styled-components";
// import { toggleFilter } from "../Slices/MapSlice";
// import { useDispatch } from "react-redux";
import { RiEqualizerLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const FilterStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const List = styled.span`
  font-size: 1.8rem;
  /* color: var(--faint_text_black); */
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  &:hover {
    color: var(--signinBtn_hover_color);
  }
`;
const FilterBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;
const iconStyle = {
  color: "var(--primary_text_color)",
  // color: "var(--faint_text_black)",
  width: "2.2rem",
  height: "2.2rem",
  cursor: "pointer",
};
const linkStyle = {
  textDecoration: "none",
  color: "var(--primary_text_color)",
};
function Filter() {
  // const dispatch = useDispatch();
  return (
    <FilterStyle>
      <FilterBox className="filter">
        <Link style={linkStyle} to="/">
          <List className={"activeTab"}>All</List>
        </Link>
        <Link style={linkStyle} to="/pot">
          <List className={"inactiveTab"}>Vacant</List>
        </Link>
      </FilterBox>
      <RiEqualizerLine style={iconStyle} />
    </FilterStyle>
  );
}

export default Filter;
