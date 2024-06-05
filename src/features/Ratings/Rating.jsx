import styled from "styled-components";
import StarRating from "../../ui/StarRating";
import { useSelector } from "react-redux";
import { TfiCommentAlt } from "react-icons/tfi";
// import { MdOutlineThumbUp } from "react-icons/md";
import { HiMiniHandThumbUp } from "react-icons/hi2";

import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
import { Max_Text_length } from "../../utils/Constants";
const RatingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`;

const Text = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: ${(props) => (props.type === "review" ? "1.4rem" : "1.6rem")};
  color: ${(props) =>
    props.type === "subhead"
      ? "var(--secondary_text)"
      : "var(--primary_text_color)"};
  line-height: ${(props) => (props.type === "review" ? "1.35" : "")};
`;

const ImgBox = styled.div`
  width: 13%;
`;
const Img = styled.img`
  width: 100%;
  border-radius: 50%;
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  gap: 0.2rem;
  height: 100%;
`;
const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  padding: 1.6rem 0;
`;
const StarBoxDetails = styled.div`
  display: flex;
  align-items: end;
  gap: 1.5rem;
`;
const InteractBox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 1.5rem 0;
`;
const CtaBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;
const IconBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 1.6rem;
  color: var(--faint_text_black);
`;
const iconStyle = {
  width: "1.8rem",
  height: "1.8rem",
  color: "var(--faint_text_black)",
};
const ctaLikeStyle = {
  width: "2rem",
  height: "2rem",
  color: "var(--input_Icon_color)",
  marginTop: "-1.5px",
};
const ctaStyle = {
  width: "2rem",
  height: "2rem",
  color: "var(--input_Icon_color)",
};

const TextData =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dignissimos sapiente aliquid fugiat quo dolorum minus quisquam repellendus explicabo, veniam ducimus libero et illo non nisi porro corporis similique. Distinctio, Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dignissimos sapiente aliquid fugiat quo dolorum minus quisquam repellendus explicabo, veniam ducimus libero et illo non nisi porro corporis similique. Distinctio";

function Rating() {
  const [collapse, setCollapse] = useState(true);
  const [like, setLike] = useState(false);

  const { hostel, School } = useSelector((state) => state.filterData);
  return (
    <RatingStyle>
      <ProfileBox>
        <ImgBox>
          <Img src="/imgProfile.png" alt="profile_logo" />
        </ImgBox>
        <TextBox>
          <Text type="head">Agbarakwe chukwu</Text>
          <StarBoxDetails>
            {hostel && <StarRating rate={4} />}
            <Text
              style={{
                fontSize: "1rem",
              }}
            >
              3 months ago
            </Text>
          </StarBoxDetails>
        </TextBox>
      </ProfileBox>
      <Text type="review">
        {TextData.split(" ").length > Max_Text_length && collapse
          ? `${TextData.split(" ")
              .slice(0, Max_Text_length - 1)
              .join(" ")}...`
          : TextData}
      </Text>
      {School && (
        <InteractBox>
          {School && collapse && (
            <Text
              style={{ color: "var(--faint_text_black)", fontSize: "1.6rem" }}
              onClick={() => setCollapse((el) => !el)}
            >
              See more <AiOutlineDown style={iconStyle} />
            </Text>
          )}
          {School && !collapse && (
            <Text
              style={{ color: "var(--faint_text_black)", fontSize: "1.6rem" }}
              onClick={() => setCollapse((el) => !el)}
            >
              See less <AiOutlineUp style={iconStyle} />
            </Text>
          )}
          <CtaBox>
            <IconBox>
              43.7k{" "}
              <HiMiniHandThumbUp
                onClick={() => setLike((el) => !el)}
                fill={
                  like ? "var(--signin_text_color)" : "var(--faint_text_black)"
                }
                style={ctaLikeStyle}
              />
            </IconBox>
            <IconBox>
              43 <TfiCommentAlt style={ctaStyle} />
            </IconBox>
          </CtaBox>
        </InteractBox>
      )}
    </RatingStyle>
  );
}

export default Rating;
