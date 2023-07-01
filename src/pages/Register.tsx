import styled from "styled-components";
import SignUp from "../components/auth/SignUp";

interface Props {}

const Register = () => {

  return (
    <RegistrationWrapper>
      <SignUp/>
    </RegistrationWrapper>
  );
};

export default Register;

const RegistrationWrapper = styled.div`
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