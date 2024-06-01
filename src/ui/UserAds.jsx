import styled from "styled-components";
import Button from "./Button";

const UserAdsStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  width: 100%;
  box-shadow: 0 0 1rem 0.5rem #0001;
  border-radius: 0.5rem;
  row-gap: 1rem;
  column-gap: 10%;
  padding: 1.5rem;
  justify-content: space-between;
`;
const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.1rem;
  width: 100%;
`;
const DetailCon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.1rem;
  width: 100%;
`;
const Name = styled.span`
  font-size: ${(props) => (props.type === "tag" ? "2rem" : "1.8rem")};
  color: ${(props) =>
    props.type === "tag"
      ? " var(--signin_text_color)"
      : "var(--primary_text_color)"};
`;
const BtnBox = styled.div`
  margin-top: ${(props) => (props.type === "delete" ? "0" : "1.5rem")};
  grid-column: 1/-1;
`;
function UserAds() {
  return (
    <UserAdsStyle>
      {Array.from({ length: 4 }).map((_, ind) => (
        <DetailCon>
          <Details tag="Name" description="Edem Dominic" key={ind} />
        </DetailCon>
      ))}
      <BtnBox>
        <Button type="background" width="100%">
          View Ads
        </Button>
      </BtnBox>
      <BtnBox type="delete">
        <Button width="100%">Delete Ads</Button>
      </BtnBox>
    </UserAdsStyle>
  );
}

function Details({ tag, description }) {
  return (
    <DetailBox>
      <Name type="tag">{tag}:</Name>
      <Name>{description}</Name>
    </DetailBox>
  );
}
export default UserAds;
