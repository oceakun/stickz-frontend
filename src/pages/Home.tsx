import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import MainBody from "../components/MainBody";
import Settings from "../components/modalWindows/Settings";
interface Props {}

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />

      <MainBody />
      {/* <Settings /> */}
      {/* <Outlet /> */}
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-color: var(--background);
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100%;
`;
