import styled from "styled-components";
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForwardOutline } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils/Constants";

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
const dataSize = 100;
function Pagination() {
  const [searchParam, setSearchParam] = useSearchParams();

  const current_page = !searchParam.get("page")
    ? 1
    : Number(searchParam.get("page"));
  const totalPages = Math.ceil(dataSize / PAGE_SIZE);
  function handleNext() {
    const next = current_page !== totalPages ? current_page + 1 : current_page;
    searchParam.set("page", next);
    setSearchParam(searchParam);
  }
  function handlePrev() {
    const Prev = current_page === 1 ? current_page : current_page - 1;
    searchParam.set("page", Prev);
    setSearchParam(searchParam);
  }
  return (
    <PaginationStyle>
      <PaginationBox>
        <Page onClick={handlePrev} disabled={current_page === 1}>
          <IoChevronBack
            style={current_page === 1 ? closeIcon : closeIconfill}
          />
        </Page>
        <Page type="count">{current_page}</Page>
        <Page onClick={handleNext} disabled={current_page === totalPages}>
          <IoChevronForwardOutline
            style={current_page === totalPages ? closeIcon : closeIconfill}
          />
        </Page>
      </PaginationBox>
      <Details>of {totalPages}</Details>
    </PaginationStyle>
  );
}

export default Pagination;
