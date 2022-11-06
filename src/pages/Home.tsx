import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import FileContent from "../components/FileContent";
import MainBody from "../components/MainBody";

interface Props {}

const Home = () => {
  return (
    <HomeContainer>
      <Navbar />
      <MainBody />
      <Outlet />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-color: var(--background);
  display: flex;
  flex-flow: column nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  /* margin: 0 10px 0 0; */
`;
