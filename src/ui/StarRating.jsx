import styled from "styled-components";
import { TiStar } from "react-icons/ti";

const StarBox = styled.div`
  display: flex;
  align-items: end;
  gap: 0.5rem;
`;
function StarRating({ color, rate, size }) {
  return (
    <StarBox>
      {Array.from({ length: 5 }).map((_, ind) => (
        <>
          <TiStar
            key={ind}
            style={{
              width: !size ? "1.4rem" : `${size}`,
              height: !size ? "1.4rem" : `${size}`,
              color: !color ? "var(--star_Icon_color)" : `${color}`,
            }}
            fill={
              !color
                ? ind < rate
                  ? "var(--primary_text_color)"
                  : "var(--star_Icon_color)"
                : ind < rate
                ? `var(--signin_text_color)`
                : `${color}`
            }
          />
        </>
      ))}
    </StarBox>
  );
}

export default StarRating;
