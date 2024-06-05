import styled from "styled-components";
import BackBtn from "../ui/BackBtn";
import ReviewDetails from "../ui/ReviewDetails";
import Rating from "../features/Ratings/Rating";
import Button from "../ui/Button";
import Pagination from "../ui/Pagination";
import RevFilterModal from "../ui/RevFilterModal";
import { useState } from "react";

const MoreLodgeDetailsStyle = styled.div`
  width: 100vw;
  padding: 5rem 0 2rem 0;
  background-color: var(--appbackgroundcolor);
  position: relative;
`;
const ReviewDetailStyle = styled.div`
  width: 100%;
  padding: 2rem 2rem 4rem 2rem;
`;
const Reviews = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;
const RewiewsHead = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  margin-bottom: 1rem;
  padding: 0 2rem;
  width: 100%;
`;
const Text = styled.span`
  font-size: 1.8rem;
  color: var(--signin_text_color);
  font-weight: bold;
`;
const BtnBox = styled.div`
  width: 40%;
`;
const ModalBox = styled.div`
  position: absolute;
  top: 37%;
  right: 5%;
  width: 75vw;
  border-radius: 1rem;
  box-shadow: 0 0.5rem 1rem 0.5rem var(--box_shadow);
`;
const OverLay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100%;
  background: var(--modal_background);
`;
function MoreLodgeDetails() {
  const [revModal, setRevModal] = useState(false);
  function handleClose(e) {
    e.target.className.includes("overLay") && setRevModal(false);
  }
  return (
    <MoreLodgeDetailsStyle>
      <BackBtn />
      <ReviewDetailStyle>
        <ReviewDetails />
      </ReviewDetailStyle>
      <Reviews>
        <RewiewsHead>
          <Text>42 reviews</Text>
          <BtnBox onClick={() => setRevModal((el) => !el)}>
            <Button width="100%" padding=".3rem" font="1.6rem" arrow={"true"}>
              Most recent
            </Button>
          </BtnBox>
        </RewiewsHead>
        {Array.from({ length: 4 }).map((_, ind) => (
          <Rating key={ind} />
        ))}
      </Reviews>
      <Pagination />
      {revModal && (
        <OverLay onClick={(e) => handleClose(e)} className="overLay">
          <ModalBox>
            <RevFilterModal close={setRevModal} />
          </ModalBox>
        </OverLay>
      )}
    </MoreLodgeDetailsStyle>
  );
}

export default MoreLodgeDetails;
