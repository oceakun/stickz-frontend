import styled from "styled-components";
import SignIn from "../components/auth/SignIn";

interface Props {}

const LogIn = () => {
  return (
      <SignWrapper>
        <SignIn />
      </SignWrapper>
  );
};

export default LogIn;

const SignWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 40;
  background-color: var(--background);
`;
