import styled from "styled-components";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
import { PiEyeLight } from "react-icons/pi";
import { PiEyeSlash } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { MdOutlineEmail } from "react-icons/md";

const SignUpStyle = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  padding-bottom: 2rem;
  position: relative;
  @media (min-width: 600px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100vh;
    width: 100vw;
    justify-content: center;
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
const SignUpPage = styled.div`
  background: var(--nav_background_color);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  align-self: center;
  width: 80vw;
  @media (min-width: 600px) {
    /* margin: 10rem auto;
    background: var(--nav_background_color);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    align-self: center;
    width: 60%;
    position: relative; */
  }
`;
const Header = styled.span`
  font-weight: ${(props) => (props.type === "head" ? "bold" : "none")};
  font-size: ${(props) => (props.type === "head" ? "2.6rem" : "1.5rem")};
  color: ${(props) =>
    props.type === "head"
      ? " var(--signin_text_color)"
      : "var(--faint_text_black)"};
  gap: ${(props) => (props.type === "ship" ? "1rem" : "0")};
`;

const Form = styled.form`
  display: flex;
  flex-direction: inherit;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;
const Label = styled.label`
  font-size: 1.5rem;
  color: var(--faint_text_black);
  cursor: pointer;
  width: fit-content;
`;
const InputField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.7rem;
  background-color: inherit;
  border: 1.34px solid var(--inputField_border);
  padding: 0.5rem 1rem;
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
  color: var(--black_text_color);
  padding: 0.5rem 1rem;
  border-radius: 0.7rem;
  font-size: 1.8rem;
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
  background-color: var(--signin_text_color);
  border: none;
  width: 100%;
  font-size: 1.8rem;
  font-weight: bold;
  color: var(--white_text);
  margin-top: 1.5rem;
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
  flex-direction: column;
  gap: 0.6rem;
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

const IconStyle = {
  fontSize: "2rem",
  color: "var(--ship_hover_color)",
  cursor: "pointer",
};
const linkStyle = {
  textDecoration: "none",
  color: "var(--signin_text_color)",
};
const closeIcon = {
  color: "var(--primary_text_color)",
  width: "2.5rem",
  height: "2.5rem",
};
function SignIn() {
  const [id, setId] = useState();
  const [reveal, setReveal] = useState();
  const [password, setPassword] = useState();

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

  // useEffect(() => {
  //   isAuth && navigate("/");
  // }, [isAuth, navigate]);
  return (
    <SignUpStyle>
      <Description></Description>
      <SignUpPage>
        <Img src="/signin.png" />
        <HeadBox>
          <Header type="head">Sign In</Header>
          <Header>Welcome back! Please enter your details</Header>
        </HeadBox>
        <Form onSubmit={(e) => handleSubmit(e)}>
          <Box>
            <Label htmlFor="id">Email</Label>
            <InputField>
              <Input
                id="id"
                type="email"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <MdOutlineEmail style={IconStyle} />
            </InputField>
          </Box>
          <Box>
            <Label htmlFor="pass">Password</Label>
            <InputField>
              <Input
                id="pass"
                type={!reveal ? "password" : "text"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {!reveal ? (
                <PiEyeSlash
                  onClick={() => setReveal((el) => !el)}
                  style={IconStyle}
                />
              ) : (
                <PiEyeLight
                  onClick={() => setReveal((el) => !el)}
                  style={IconStyle}
                />
              )}
            </InputField>
            <ResetTextBox>
              Forgot password?
              <Link style={linkStyle}>
                <Span>Reset password</Span>
              </Link>
            </ResetTextBox>
            {/* {!isLoading &&
              initial &&
              isFetched &&
              data?.status !== "success" && (
                <Error>Incorrect login credentials</Error>
              )} */}
          </Box>
          <Submit
            onClick={(e) => handleSubmit(e)}
            onSubmit={(e) => handleSubmit(e)}
          >
            Sign In
          </Submit>
          <ResetTextBox type="signup">
            Don't have an account?
            <Link style={linkStyle} to="/signup">
              <Span>SignUp</Span>
            </Link>
          </ResetTextBox>
        </Form>
      </SignUpPage>
      {/* {isLoading && initial && (
        <LoadingStyle>
          <Loading />
        </LoadingStyle>
      )} */}
      <CloseMenu onClick={() => navigate(-1)}>
        <RxCross1 style={closeIcon} />
      </CloseMenu>
    </SignUpStyle>
  );
}

export default SignIn;
