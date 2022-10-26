import { useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

interface Props {}

const Home = () => {

  return (
    <HomeContainer >
      <Navbar />
      <Outlet />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
 background-color: var(--background);

`;
