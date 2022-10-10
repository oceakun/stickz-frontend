import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../components/contexts/ThemeContext";
import { ThemeModeContext } from "../components/contexts/ThemeModeContext";

interface Props {}

type UnmatchedPasswordWarningType = {
  displayStatus: string;
};

type AlreadyInUseEmailWarningType = {
  displayStatus: string;
};

const SignUp = () => {

  const [registrationEmail, setRegistrationEmail] = useState("");
  const [registrationPassword, setRegistrationPassword] = useState("");
  const [confirmedRegistrationPassword, setConfirmedRegistrationPassword] =
    useState("");
  const [unmatchedPasswordWarning, setUnmatchedPasswordWarning] =
    useState("none");
  const [alreadyInUseWarning, setAlreadyInUseWarning] = useState("none");

  const theme = useContext(ThemeContext);
  const themeModeContext = useContext(ThemeModeContext);
  const [themeToBeApplied, setThemeToBeApplied] = useState(theme.light);

  useEffect(() => {
    themeModeContext?.themeMode?.theme === "light"
      ? setThemeToBeApplied(theme.light)
      : setThemeToBeApplied(theme.dark);
  }, [themeModeContext?.themeMode?.theme]);

  const handleEmail = (e: any) => {
    e.preventDefault();
    const val = e.target.value;
    setRegistrationEmail(val);
  };

  const handlePassword = (e: any) => {
    e.preventDefault();
    const val = e.target.value;
    setRegistrationPassword(val);
  };

  const handleConfirmedPassword = (e: any) => {
    e.preventDefault();
    const val = e.target.value;
    setConfirmedRegistrationPassword(val);
  };

  const register = () => {
    setRegistrationEmail("");
    setRegistrationPassword("");
    setConfirmedRegistrationPassword("");
  };

  let navigate = useNavigate();

  return (
    <SignUpContainer themeticProp={themeToBeApplied}>
      <RegistrationContainer themeticProp={themeToBeApplied}>
        <h3>Register</h3>
        <InputFieldContainer themeticProp={themeToBeApplied}>
          <p>E-mail</p>
          <input
            type="email"
            placeholder="..."
            onChange={handleEmail}
            value={registrationEmail}
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
            value={registrationPassword}
            name="password"
            required
          ></input>
        </InputFieldContainer>

        <InputFieldContainer themeticProp={themeToBeApplied}>
          <p>Confirm password</p>
          <input
            type="password"
            placeholder="..."
            onChange={handleConfirmedPassword}
            value={confirmedRegistrationPassword}
            name="password"
            required
          ></input>
        </InputFieldContainer>

        <SubmitButtonContainer themeticProp={themeToBeApplied}>
          <button type="button" onClick={register}>
            Sign-Up
          </button>
        </SubmitButtonContainer>

        <SignInOptionContainer themeticProp={themeToBeApplied}>
          New to okasure ?{" "}
          <span
            onClick={() => {
              navigate("/signin");
            }}
          >
            Sign-In
          </span>
        </SignInOptionContainer>

        <UnmatchedPasswordWarningContainer
          displayStatus={unmatchedPasswordWarning}
          themeticProp={themeToBeApplied}
        >
          <p style={{ textAlign: "left" }}>* Passwords don't match.</p>
        </UnmatchedPasswordWarningContainer>
        {/* setAlreadyInUseWarning */}
        <AlreadyInUseEmailWarningContainer
          displayStatus={unmatchedPasswordWarning}
          themeticProp={themeToBeApplied}
        >
          <p style={{ textAlign: "left" }}>
            * A user with the entered e-mail already exists.
          </p>
        </AlreadyInUseEmailWarningContainer>
      </RegistrationContainer>
    </SignUpContainer>
  );
};

export default SignUp;

const SignUpContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`;

const RegistrationContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-end;
  align-items: center;
  /* position:absolute; */
  /* border: #b9c6cd solid 1px; */
  background-color: ${(props: any) => props.themeticProp.signInAndSignOutCardBackgroundColor};
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
    opacity: 0.8;
    margin-top: 20px;
  }
  > Button:hover {
    opacity: 1;
  }
`;

const SignInOptionContainer = styled.p`
  color: ${(props: any) => props.themeticProp.text};
  > span {
    border-bottom: 1px solid ${(props: any) => props.themeticProp.text};
  }
  > span:hover {
    cursor: pointer;
  }
`;

const UnmatchedPasswordWarningContainer = styled.div`
  display: ${(props: UnmatchedPasswordWarningType) => props.displayStatus};
  > p {
    background: -webkit-linear-gradient(45deg, #f2aecc, #f2aeae, #c97777);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const AlreadyInUseEmailWarningContainer = styled.div`
  display: ${(props: AlreadyInUseEmailWarningType) => props.displayStatus};
  > p {
    background: -webkit-linear-gradient(45deg, #f2aecc, #f2aeae, #c97777);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;
