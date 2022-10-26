import { useState } from "react";
import styled from "styled-components";
interface Props {}

const Notes = () => {
  return <NotesContainer >notes</NotesContainer>;
};

export default Notes;

const NotesContainer = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px;
`;
