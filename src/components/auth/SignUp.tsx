import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
    <RegistrationContainer>
      <h3>Register</h3>
      <InputFieldContainer>
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

      <InputFieldContainer>
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

      <InputFieldContainer>
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

      <SubmitButtonContainer>
        <button type="button" onClick={register}>
          Sign-Up
        </button>
      </SubmitButtonContainer>

      <SignInOptionContainer>
        Already Registered?{" "}
        <span
          onClick={() => {
            navigate("/login");
          }}
        >
          Log In
        </span>
      </SignInOptionContainer>

      <UnmatchedPasswordWarningContainer
        displayStatus={unmatchedPasswordWarning}
      >
        <p style={{ textAlign: "left" }}>* Passwords don't match.</p>
      </UnmatchedPasswordWarningContainer>
      {/* setAlreadyInUseWarning */}
      <AlreadyInUseEmailWarningContainer
        displayStatus={unmatchedPasswordWarning}
      >
        <p style={{ textAlign: "left" }}>
          * A user with the entered e-mail already exists.
        </p>
      </AlreadyInUseEmailWarningContainer>
    </RegistrationContainer>
  );
};

export default SignUp;

const RegistrationContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  background-color: var(--signInAndSignOutCardBackgroundColor);
  border-radius: 5px;
  padding: 0 75px 10px 75px;
  margin-top: -300px;
  position: absolute;
  z-index: 5;

  > p {
    color: var(--text);
    font-size: 13px;
    opacity: 0.7;
  }
  > h3 {
    // font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    //   Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size: 20px;
    font-weight: normal;
    /* padding: 2px; */
    color: var(--text);
  }
`;

const InputFieldContainer = styled.div`
  > p {
    color: var(--text);
    opacity: 0.6;
  }
  > input[type="email"] {
    width: 195px;
    border: black 1px solid;
    border-radius: 3px;
    height: 25px;
    background-color: var(--signoutButtonBackgroundColor);
    color: var(--text);
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
    background-color: var(--signoutButtonBackgroundColor);
    color: var(--text);
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
    color: var(--text);
    opacity: 0.6;
  }
  > Button {
    background-color: var(--navbarBackground);
    color: var(--text);
    width: 200px;
    cursor: pointer;
    height: 25px;
    text-align: center;
    border: var(--toggleButtonColor) 1px solid;
    border-radius: 3px;
    opacity: 0.8;
    margin-top: 20px;
  }
  > Button:hover {
    opacity: 1;
  }
`;

const SignInOptionContainer = styled.p`
  color: var(--text);
  > span {
    border-bottom: 1px solid var(--text);
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
