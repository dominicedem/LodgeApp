import styled from "styled-components";
import { TiStar } from "react-icons/ti";
import Button from "./Button";
import { useState } from "react";
import { useSelector } from "react-redux";

const CommentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  width: 100%;
  padding: 0 2rem;
`;
const Text = styled.span`
  width: fit-content;
  color: var(--primary_text_color);
  font-size: 1.8rem;
  align-self: start;
`;
const Input = styled.textarea`
  width: 100%;
  font-size: 1.8rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid var(--inputField_border);
  color: var(--primary_text_color);
  margin-top: -1.5rem;
  &::placeholder {
    color: var(--secondary_text_faint);
  }
`;
const GiveRatingStyle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
const StarBox = styled.div``;
const Span = styled.span`
  margin-top: -0.5rem;
  font-size: 1.6rem;
  color: var(--faint_text_black);
  align-self: start;
`;
const StarIcon = {
  color: "var(--star_Icon_color)",
  width: "3.5rem",
  height: "3.5rem",
};
function Comment() {
  const [comment, setComment] = useState();
  const { hostel } = useSelector((state) => state.filterData);

  return (
    <CommentStyle>
      {hostel ? <Text>Leave a review</Text> : <Text>Leave a comment</Text>}
      {hostel ? (
        <GiveRating hostel={hostel} />
      ) : (
        <Span>Share your eperience about this place</Span>
      )}
      <Input
        onChange={(e) => setComment(e.target.value)}
        type="textarea"
        placeholder="Comment"
        rows={7}
        cols={80}
      />
      <Button
        type="background"
        width="40%"
        backgroundColor={!comment ? "var(--tertiary_text_faint)" : ""}
        color={!comment ? "var(--primary_text_color)" : ""}
      >
        Submit
      </Button>
    </CommentStyle>
  );
}

function GiveRating({ hostel }) {
  const [active, setActive] = useState(0);
  const [choose, setChoose] = useState(false);

  function handleEnter(ind) {
    setChoose(false);
    setActive(ind + 1);
  }
  function handleLeave() {
    !choose && setActive(0);
  }
  return (
    <GiveRatingStyle>
      {Array.from({ length: 5 }).map((_, ind) => (
        <>
          <StarBox>
            <TiStar
              onClick={() => setChoose(true)}
              onMouseEnter={() => handleEnter(ind)}
              onMouseLeave={() => handleLeave()}
              key={ind}
              style={StarIcon}
              fill={
                ind < active
                  ? "var(--primary_text_color)"
                  : " var(--star_Icon_color)"
              }
            />
          </StarBox>
        </>
      ))}
    </GiveRatingStyle>
  );
}

export default Comment;
