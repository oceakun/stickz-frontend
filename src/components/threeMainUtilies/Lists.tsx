import { useState } from "react";
import styled from "styled-components";
import Sidebar from "../Sidebar";

interface Props {}

const Lists = () => {
  return (
    <ListsContainer>
      <Sidebar />
      lists
    </ListsContainer>
  );
};

export default Lists;

const ListsContainer = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: space-between;
  gap: 20px;
  margin: 0 10px 0 0;
`;
