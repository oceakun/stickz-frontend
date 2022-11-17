import Sidebar from "../components/Sidebar";
import FileContent from "../components/FileContent";
import styled from "styled-components";

interface Props {}

const MainBody = () => {
  return (
    <MainBodyContainer>
        <Sidebar />
        <FileContent />
    </MainBodyContainer>
  );
};

export default MainBody;

const MainBodyContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  /* justify-content: flex-start; */
  /* align-self: stretch; */
  height:90%;
  position:relative;
  box-sizing:border-box;
  flex:none;
  order:0;
  align-self: stretch;
  flex-grow:1;
`;