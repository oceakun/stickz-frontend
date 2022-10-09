import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../components/contexts/ThemeContext";
import { ThemeModeContext } from "../components/contexts/ThemeModeContext";

interface Props {}

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const theme = useContext(ThemeContext);
  const themeModeContext = useContext(ThemeModeContext);
  const [themeToBeApplied, setThemeToBeApplied] = useState(theme.light);

  useEffect(() => {
    themeModeContext?.themeMode?.theme === "light"
      ? setThemeToBeApplied(theme.light)
      : setThemeToBeApplied(theme.dark);
  }, [themeModeContext?.themeMode?.theme]);

  let navigate = useNavigate();

  const logIn = () => {
    setLoginEmail("");
    setLoginPassword("");
    navigate("/home");
  };

  const handleEmail = (e: any) => {
    e.preventDefault();
    const val = e.target.value;
    setLoginEmail(val);
  };

  const handlePassword = (e: any) => {
    e.preventDefault();
    const val = e.target.value;
    setLoginPassword(val);
  };

  return (
    <SignInContainer themeticProp={themeToBeApplied}>
      <LoginContainer themeticProp={themeToBeApplied}>
        <h3>Log-In</h3>
        <InputFieldContainer themeticProp={themeToBeApplied}>
          <p>E-mail</p>
          <input
            type="email"
            placeholder="..."
            onChange={handleEmail}
            value={loginEmail}
            name="email"
            required
          ></input>
        </InputFieldContainer>

        <InputFieldContainer themeticProp={themeToBeApplied}>
          <p>Password</p>
          <input
            type="password"
            placeholder="..."
            onChange={handlePassword}
            value={loginPassword}
            name="password"
            required
          ></input>
        </InputFieldContainer>

        <SubmitButtonContainer themeticProp={themeToBeApplied}>
          <button type="submit" onClick={logIn}>
            Sign-In
          </button>
        </SubmitButtonContainer>

        <SignUpOptionContainer themeticProp={themeToBeApplied}>
          New to okasure ?{" "}
          <span onClick={()=>{navigate("/signup")}}>
            {/* <Link
              style={{
                textDecoration: "none",
                color: themeToBeApplied.text,
                border: "1px solid --var(shallow-black)",
                borderRadius: "2px",
                padding: "2px",
              }}
              to="/signup"
            > */}
              Sign-Up
            {/* </Link> */}
          </span>
        </SignUpOptionContainer>
      </LoginContainer>
    </SignInContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const LoginContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  /* position:absolute; */
  border: #b9c6cd solid 1px;

  background-color: ${(props: any) => props.themeticProp.background};
  border-radius: 5px;
  padding: 0 75px 10px 75px;
  > p {
    color: ${(props: any) => props.themeticProp.text};
    font-size: 13px;
    opacity: 0.7;
  }
  > h3 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
    font-weight: normal;
    padding: 2px;
    color: ${(props: any) => props.themeticProp.text};
    /* background: -webkit-linear-gradient(0deg, #605df0, #67c6e3);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
`;

const InputFieldContainer = styled.div`
  > p {
    color: ${(props: any) => props.themeticProp.text};
    opacity: 0.6;
    /* text-align:center; */
  }
  > input[type="email"] {
    width: 195px;
    border: black 1px solid;
    border-radius: 3px;
    height: 25px;
    background-color: ${(props: any) =>
      props.themeticProp.signoutButtonBackgroundColor};
    color: ${(props: any) => props.themeticProp.text};
    opacity: 0.7;
    /* iimmi */
    text-align: center;
  }
  > input[type="email"]:focus {
    outline: none;
    opacity: 1;
  }
  > input[type="password"] {
    width: 195px;
    border: black 1px solid;
    border-radius: 3px;
    height: 25px;
    background-color: ${(props: any) =>
      props.themeticProp.signoutButtonBackgroundColor};
    color: ${(props: any) => props.themeticProp.text};
    opacity: 0.7;
    text-align: center;
  }
  > input[type="password"]:focus {
    outline: none;
    opacity: 1;
  }
`;

const SubmitButtonContainer = styled.div`
  > p {
    color: ${(props: any) => props.themeticProp.text};
    opacity: 0.6;
  }
  > Button {
    background-color: ${(props: any) => props.themeticProp.navbarBackground};
    width: 200px;
    cursor: pointer;
    height: 25px;
    text-align: center;
    color: ${(props: any) => props.themeticProp.text};
    border: black 1px solid;
    border-radius: 3px;
    opacity: 0.5;
    margin-top: 20px;
  }
  > Button:hover {
    opacity: 0.8;
  }
`;

const SignUpOptionContainer = styled.p`
color: ${(props: any) => props.themeticProp.text};
> span{
  border-bottom :1px solid ${(props: any) => props.themeticProp.text};
}
> span:hover{
  cursor : pointer; 
}
`;
