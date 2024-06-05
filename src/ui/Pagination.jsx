import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useState } from "react";

const PaginationStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
  gap: 1rem;
  width: 100vw;
`;
const PaginationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const Page = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  background: ${(props) =>
    props.type === "count" ? "inherit" : "var(--pagination_faint)"};
  color: ${(props) => (props.type === "count" ? "var(--secondary_text)" : "")};
  padding: ${(props) => (props.type === "count" ? "1rem 1.6rem" : "1rem")};
  font-size: 1.6rem;
  border: ${(props) =>
    props.type === "count" ? "1px solid var(--inputField_border)" : "none"};
`;
const Details = styled.span`
  font-size: 1.7rem;
  color: var(--faint_text_black);
`;
const closeIcon = {
  color: "var(--tertiary_text_faint)",
  width: "2.4rem",
  height: "2.4rem",
};
const closeIconfill = {
  color: "var(--primary_text_color)",
  width: "2.4rem",
  height: "2.4rem",
};
function Pagination() {
  const [pages, setPages] = useState(0);
  //   const PAGE_SIZE = 10;
  //   const DATA_SIZE = 200;
  function handleNext() {
    setPages((el) => el + 1);
  }
  function handlePrev() {
    setPages((el) => el - 1);
  }
  console.log(pages);
  return (
    <PaginationStyle>
      <PaginationBox>
        <Page onClick={handlePrev} disabled={pages < 1}>
          <IoChevronBack style={pages < 1 ? closeIcon : closeIconfill} />
        </Page>
        <Page type="count">2</Page>
        <Page onClick={handleNext} disabled={pages > 9}>
          <IoChevronForwardOutline
            style={pages > 9 ? closeIcon : closeIconfill}
          />
        </Page>
      </PaginationBox>
      <Details>of 12</Details>
    </PaginationStyle>
  );
}

export default Pagination;
