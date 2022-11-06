import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
interface Props {}

const Draw = () => {
  return (
    <DrawContainer>
      <Sidebar />
      draw
    </DrawContainer>
  );
};

export default Draw;

const DrawContainer = styled.div`
color: var(--text);
display: flex;
flex-flow: row nowrap;
align-items: flex-start;
justify-content: space-between;
gap: 20px;
margin: 0 10px 0 0;
`;
