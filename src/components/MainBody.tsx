import Sidebar from "./sidebar/Sidebar";
import FileContent from "./sidebar/FileContent";
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
  height:90%;
  width:100%;
  position:relative;
  box-sizing:border-box;
  flex:none;
  order:0;
  align-self: stretch;
  flex-grow:1;
`;