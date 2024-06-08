import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { toggleFilter } from "../Slices/MapSlice";
import { IoSchoolOutline } from "react-icons/io5";
import { LiaHomeSolid } from "react-icons/lia";
import { LuUsers2 } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { setHome, setRoommate, setSchool } from "../Slices/FilterSlice";
import { setFilteredLodge } from "../Slices/SearchSlice";

const Searchs = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid var(--inputField_border);
  width: 100%;
  border-radius: 0.5rem;
  transition: all 0.3s;
  padding: 0.3rem;
  gap: 1rem;
  &:hover {
    border: 1px solid var(--signinBtn_hover_color);
  }
  /* @media (max-width: 500px) {
  } */
`;
const SecondBar = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  width: 100%;
  padding: 0 1.5rem 1rem 1.5rem;
  background: inherit;
  gap: 1.5rem;
  border-bottom: 1px solid var(--secondary_text_faint);
`;
const Input = styled.input`
  border: none;
  font-size: 2rem;
  width: 85%;
  color: var(--searchtextcolor);
  background: inherit;
  &::placeholder {
    color: var(--placeholdercolor);
    font-size: 1.8rem;
  }
`;
const SearchIconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--signin_text_color);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 0.5rem;
`;
const SearchType = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
const Types = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.6rem;
  color: var(--faint_text_black);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
`;
const iconStyle = {
  color: "var(--appbackgroundcolor)",
  width: "2.2rem",
  height: "2.2rem",
  cursor: "pointer",
};
const iconStyles = {
  color: "var(--faint_text_black)",
  width: "2rem",
  height: "2rem",
};
// const linkStyle = {
//   textDecoration: "none",
//   color: "var(--primary_text_color)",
// };
const lodgeList = [
  "muyiwa",
  "balogun",
  "odogbolu",
  "iyarere",
  "sanya",
  "ijesha",
  "aguda",
  "ikare street",
  "surulere",
  "mushin",
  "ojuelegba",
  "masha",
  "shita",
  "lawanson-stein",
  "emmanuel",
];
function SearchBar({ setactive }) {
  const [searchedLodge, setSearchedLodge] = useState();
  const { hostel, School, roomate } = useSelector((state) => state.filterData);

  const dispatch = useDispatch();
  function handleSearch(e) {
    setSearchedLodge(e.target.value);
  }
  useEffect(() => {
    let newSearchedLodge = lodgeList.filter((val) =>
      val.toLowerCase().includes(searchedLodge?.toLowerCase())
    );
    // let newSearchedLodge = lodgeList.filter(
    //   (val) =>
    //     val.toLowerCase().slice(0, [searchedLodge?.length]) ===
    //       searchedLodge?.toLowerCase() && val
    // );
    newSearchedLodge.length >= 1 && newSearchedLodge.length < lodgeList.length
      ? dispatch(setFilteredLodge(newSearchedLodge))
      : dispatch(setFilteredLodge(""));
  }, [searchedLodge, dispatch]);
  return (
    <SecondBar>
      <Searchs>
        <SearchIconBox>
          <IoSearch style={iconStyle} />
        </SearchIconBox>
        <Input
          onFocus={() => setactive(true)}
          onBlur={() => setactive(false)}
          value={searchedLodge}
          onChange={(e) => handleSearch(e)}
          type="text"
          placeholder="Search lodge"
        />
      </Searchs>
      <SearchType>
        <Types
          className={hostel && "activeFilter"}
          onClick={() => dispatch(setHome(true))}
        >
          <IoSchoolOutline
            stroke={
              hostel ? "var(--primary_text_color)" : "var(--faint_text_black)"
            }
            style={iconStyles}
          />
          Hostel
        </Types>
        <Types
          className={School && "activeFilter"}
          onClick={() => dispatch(setSchool(true))}
        >
          <LiaHomeSolid
            fill={
              School ? "var(--primary_text_color)" : "var(--faint_text_black)"
            }
            style={iconStyles}
          />
          School
        </Types>
        <Types
          className={roomate && "activeFilter"}
          onClick={() => dispatch(setRoommate(true))}
        >
          <LuUsers2
            stroke={
              roomate ? "var(--primary_text_color)" : "var(--faint_text_black)"
            }
            style={iconStyles}
          />
          Roommate
        </Types>
      </SearchType>
    </SecondBar>
  );
}

export default SearchBar;
