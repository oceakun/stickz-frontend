import Sidebar from "../components/Sidebar";
import FileContent from "../components/FileContent";
import styled from "styled-components";

interface Props {}

const MainBody = () => {
  return (
    <MainBodyContainer>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <FileContentContainer>
        <FileContent />
      </FileContentContainer>
    </MainBodyContainer>
  );
};

export default MainBody;

const MainBodyContainer = styled.div`
  background-color: var(--background);
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SidebarContainer = styled.div`
flex-grow: 0;
`;

const FileContentContainer = styled.div`
flex-grow: 1;
`;