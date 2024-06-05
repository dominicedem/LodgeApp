import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import Button from "./Button";
const ReviewFilterStyle = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1rem;
  border-radius: inherit;
  background-color: var(--appbackgroundcolor);
  padding: 0 0 1rem 0;
  border: 1px solid var(--input_Icon_color);
`;
const CloseMenu = styled.span`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 2rem;
  width: 100%;
  padding: 1rem;
  font-weight: bold;
  color: var(--faint_text_black);
  border-bottom: 1px solid var(--tertiary_text_faint);
`;
const SortListBox = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 1.5rem;
  padding: 1rem 1rem 1.5rem 1rem;
  border-bottom: 1px solid var(--tertiary_text_faint);
`;
const BtnBox = styled.div`
  align-self: center;
  width: 92%;
`;
const List = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: var(--faint_text_black);
  width: 100%;
  font-size: 1.8rem;
`;
const Input = styled.input`
  width: 2rem;
  height: 2rem;
`;
const closeIcon = {
  color: "var(--primary_text_color)",
  width: "2.2rem",
  height: "2.2rem",
};
function RevFilterModal({ close }) {
  function handleSave() {
    close(false);
  }
  return (
    <ReviewFilterStyle>
      <CloseMenu>
        <RxCross1 onClick={() => close(false)} style={closeIcon} /> Sort by
      </CloseMenu>
      <SortListBox>
        <List>
          Most recent <Input type="radio" />
        </List>
        <List>
          Highest rated <Input type="radio" />
        </List>
        <List>
          lowest rated <Input type="radio" />
        </List>
      </SortListBox>
      <BtnBox onClick={handleSave}>
        <Button
          width="100%"
          backgroundColor="var(--signin_text_color)"
          color="var(--white_text)"
        >
          Save
        </Button>
      </BtnBox>
    </ReviewFilterStyle>
  );
}

export default RevFilterModal;
