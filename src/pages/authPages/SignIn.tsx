import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../components/contexts/ThemeContext";
import { ThemeModeContext } from "../../components/contexts/ThemeModeContext";
import useLocalStorage from "use-local-storage";

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
    <SignInContainer>
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
              navigate("/signup");
            }}
          >
            Sign-Up
          </span>
        </SignUpOptionContainer>
      </LoginContainer>
    </SignInContainer>
  );
};

export default SignIn;

const SignInContainer = styled.div`

background-color: var(--background);

  display: block;
  margin:auto;
  height: 100vh;
`;

const LoginContainer = styled.div`
  /* display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background-color: var(--signInAndSignOutCardBackgroundColor);
  border-radius: 5px;
  padding: 0 75px 10px 75px;
 */


  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: var(--signInAndSignOutCardBackgroundColor);
  border-radius: 5px;
  padding:0 75px 10px 75px;;
  padding-top:0;


  > p {
    color: var(--text);
    font-size: 13px;
    opacity: 0.7;
  }
  > h3 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
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
