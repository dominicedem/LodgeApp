import styled from "styled-components";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";

const VerifyEmailStyle = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100vw;
    justify-content: center;
    position: relative;
  }
`;
const Description = styled.div`
  display: none;
  @media (min-width: 600px) {
    background: linear-gradient(
        var(--theme_background_color),
        var(--theme_background_color)
      ),
      url("/seaport1.jpeg");
    width: 100%;
    background-size: cover;
  }
`;
const VerifyEmailPage = styled.div`
  background: var(--nav_background_color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  align-self: center;
  width: 100%;
  @media (min-width: 600px) {
    margin: 10rem auto;
    background: var(--nav_background_color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    align-self: center;
    width: 60%;
    position: relative;
  }
`;
const Header = styled.span`
  font-weight: ${(props) => (props.type === "head" ? "bold" : "none")};
  margin-top: ${(props) => (props.type === "email" ? "-.5rem" : "0")};
  font-size: ${(props) => (props.type === "head" ? "2.6rem" : "1.5rem")};
  color: ${(props) =>
    props.type === "head"
      ? " var(--signin_text_color)"
      : "var(--faint_text_black)"};
  gap: ${(props) => (props.type === "ship" ? "1rem" : "0")};
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
`;
const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.7rem;
  background-color: inherit;
  border: 1.34px solid var(--inputField_border);
  padding: 1.2rem 0.5rem;
  &:hover,
  &:focus {
    border: 1.34px solid var(--signin_text_color_faint);
  }
`;
const Input = styled.input`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: inherit;
  border: none;
  text-align: center;
  color: var(--black_text_color);
  font-size: 2rem;
  width: 100%;
`;
const Img = styled.img`
  width: 50%;
`;
const Submit = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 1.5rem;
  border-radius: 0.7rem;
  border: none;
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--white_text);
  cursor: pointer;
  &:hover {
    background-color: var(--signinBtn_hover_color);
  }
`;
const HeadBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;
const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;
const Span = styled.span`
  &:hover {
    text-decoration: underline;
  }
`;
const ResetTextBox = styled.div`
  margin-top: ${(props) => (props.type === "signup" ? "-1rem" : "0.5rem")};
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.4rem;
  color: var(--faint_text_black);
  width: 100%;
`;
const CloseMenu = styled.div`
  position: fixed;
  top: 3%;
  right: 3%;
`;
// const LoadingStyle = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   position: absolute;
//   top: 0;
//   left: 50%;
//   width: 50%;
//   height: 100%;
//   background-color: var(--notification_hover_color);
//   backdrop-filter: blur(5px);
// `;
// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--red_exit_color);
// `;
const linkStyle = {
  textDecoration: "none",
  color: "var(--signin_text_color)",
};
const closeIcon = {
  color: "var(--primary_text_color)",
  width: "2.5rem",
  height: "2.5rem",
};
function VerifyEmail() {
  const [password1, setPassword1] = useState();
  const [password2, setPassword2] = useState();
  const [password3, setPassword3] = useState();
  const [password4, setPassword4] = useState();
  const [password5, setPassword5] = useState();
  const [confirm, setConfirm] = useState(false);

  // const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    // setData(id, password);
    // if (isFetched) {
    //   setId("");
    //   setPassword("");
    //   setTimeout(() => dispatch(setInitail(false)), [4000]);
    // }
  }

  // useEffect(() => {
  //   data?.status === "success" && dispatch(setIsAuth(true));
  //   data?.status === "success" && dispatch(setToken(data.token));
  // }, [data, dispatch]);

  //   useEffect(() => {
  //     isAuth && navigate("/");
  //   }, [isAuth, navigate]);
  useEffect(() => {
    password1 && password2 && password3 && password4 && password5
      ? setConfirm(true)
      : setConfirm(false);
  }, [password1, password2, password3, password4, password5]);
  return (
    <VerifyEmailStyle>
      <Description></Description>
      <VerifyEmailPage>
        <Img src="/signin.png" />
        <HeadBox>
          <Header type="head">Verify Email</Header>
          <Header>Enter the verification code set to:</Header>
          <Header type="email">userEmail@gmail.com</Header>
        </HeadBox>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Box>
            <InputField>
              <Input
                type="password"
                value={password1}
                maxLength={1}
                onChange={(e) => setPassword1(e.target.value)}
              />
            </InputField>
            <InputField>
              <Input
                type="password"
                value={password2}
                maxLength={1}
                onChange={(e) => setPassword2(e.target.value)}
              />
            </InputField>
            <InputField>
              <Input
                type="password"
                value={password3}
                maxLength={1}
                onChange={(e) => setPassword3(e.target.value)}
              />
            </InputField>
            <InputField>
              <Input
                type="password"
                value={password4}
                maxLength={1}
                onChange={(e) => setPassword4(e.target.value)}
              />
            </InputField>
            <InputField>
              <Input
                type="password"
                value={password5}
                maxLength={1}
                onChange={(e) => setPassword5(e.target.value)}
              />
            </InputField>
          </Box>
          {/* {!isLoading &&
              initial &&
              isFetched &&
              data?.status !== "success" && (
                <Error>Incorrect login credentials</Error>
            )} */}

          <Submit
            onClick={(e) => handleSubmit(e)}
            onSubmit={(e) => handleSubmit(e)}
            className={confirm ? "verify" : "notVerify"}
          >
            Sign In
          </Submit>
          <ResetTextBox type="signup">
            Did not recieve email?
            <Link style={linkStyle}>
              <Span>Resend</Span>
            </Link>
          </ResetTextBox>
        </Form>
      </VerifyEmailPage>
      {/* {isLoading && initial && (
        <LoadingStyle>
          <Loading />
        </LoadingStyle>
      )} */}
      <CloseMenu onClick={() => navigate(-1)}>
        <RxCross1 style={closeIcon} />
      </CloseMenu>
    </VerifyEmailStyle>
  );
}

export default VerifyEmail;
