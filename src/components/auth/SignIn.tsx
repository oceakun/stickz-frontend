import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

interface Props {}

const SignIn = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

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
    // <SignInContainer>
    <LoginContainer>
      <h3>Log-In</h3>
      <InputFieldContainer>
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

      <InputFieldContainer>
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

      <SubmitButtonContainer>
        <button type="submit" onClick={logIn}>
          Sign-In
        </button>
      </SubmitButtonContainer>

      <SignUpOptionContainer>
        New to okasure ?{" "}
        <span
          onClick={() => {
            navigate("/register");
          }}
        >
          Register
        </span>
      </SignUpOptionContainer>
    </LoginContainer>
  );
};

export default SignIn;

const LoginContainer = styled.div`
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
    padding: 2px;
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

const SignUpOptionContainer = styled.p`
  color: var(--text);
  > span {
    border-bottom: 1px solid var(--text);
  }
  > span:hover {
    cursor: pointer;
  }
`;
