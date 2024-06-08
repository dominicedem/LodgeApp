import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "../ui/SearchBar";
import Filter from "../ui/Filter";
import Lodges from "../ui/Lodges";
import { useSelector } from "react-redux";
import { useState } from "react";

const HomeStyle = styled.div`
  position: relative;
  background-color: var(--appbackgroundcolor);
  width: 100vw;
  padding: 21rem 0 4rem 0;
`;

const HomeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  margin-top: -1rem;
`;

const SearcBarBox = styled.div`
  position: fixed;
  background: var(--appbackgroundcolor);
  width: 100vw;
  top: 5rem;
  left: 0;
  padding-top: 2.5rem;
  z-index: 100;
`;

const Filterbox = styled.div`
  padding: 0 1.5rem;
`;

const LodgeBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1.5rem;
  gap: 6rem;
`;
const ListOfLodges = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  position: fixed;
  top: 13rem;
  left: 1.5rem;
  padding: 1rem 0;
  border-radius: 1rem;
  width: 95%;
  height: 20rem;
  z-index: 1000;
  overflow-y: scroll;
  background-color: var(--appbackgroundcolor);
  box-shadow: 0 0.5rem 1rem 0.5rem var(--box_shadow);
`;
const List = styled.span`
  align-self: ${(props) => (props.type === "empty" ? "center" : "start")};
  font-size: 1.8rem;
  width: ${(props) => (props.type === "empty" ? "fit-content" : "100%")};
  color: var(--faint_text_black);
  padding: 1.4rem;
  z-index: 1000;
  &:hover {
    background: var(--hover_background_blue);
  }
`;

const Test = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: underline;
  padding: 0 1.5rem;
  gap: 7rem;
  width: 100%;
  margin-top: 2rem;
`;

const linkStyle = {
  textDecoration: "none",
  color: "var(--primary_text_color)",
  fontSize: "2rem",
};
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
function Home() {
  const { hostel, School, roomate } = useSelector((state) => state.filterData);
  const { filteredLodge } = useSelector((state) => state.searchData);
  const [active, setactive] = useState(false);
  // const [activeList, setActiveList] = useState(0);

  function handleKeyDown(e) {
    // if (["Enter", "ArrowUp", "ArrowDown"].includes(e.key)) {
    //   e.key === "ArrowDown" && setActiveList((el) => el + 1);
    //   e.key === "ArrowUp" && setActiveList((el) => el - 1);
    //   e.key === "Enter" && setactive(false);
    // }
  }
  return (
    <HomeStyle>
      <SearcBarBox>
        <SearchBar active={active} setactive={setactive} />
      </SearcBarBox>
      <HomeBox>
        <Filterbox>
          <Filter />
        </Filterbox>
        <LodgeBox>
          {Array.from({ length: 4 }).map((_, ind) => (
            <>
              {School && <Lodges right="comment" key={ind} />}
              {hostel && <Lodges right="rate" filter="hostel" key={ind} />}
            </>
          ))}
        </LodgeBox>
      </HomeBox>
      <Test>
        <Link style={linkStyle} to="signin">
          SignIn
        </Link>
        <Link style={linkStyle} to="verifyemail">
          Verify-email
        </Link>
      </Test>
      {active && (
        <ListOfLodges onKeyDown={(e) => handleKeyDown(e)} tabIndex={1}>
          {!filteredLodge ? (
            <List type="empty">Empty...</List>
          ) : (
            filteredLodge.map((val, ind) => (
              <List
                // style={
                //   activeList === ind
                //     ? { background: "var(--hover_background_blue)" }
                //     : { background: "inherit" }
                // }
                key={ind}
              >
                {val}
              </List>
            ))
          )}
        </ListOfLodges>
      )}
    </HomeStyle>
  );
}

export default Home;
