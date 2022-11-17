import styled from "styled-components";
import Sidebar from "../Sidebar";

interface Props {}

const Notes = () => {
  return (
    <NotesContainer>
      <Sidebar />
    </NotesContainer>
  );
};

export default Notes;

const NotesContainer = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 20px;
  margin: 0 10px 0 0;
`;
