import styled from "styled-components";
import NoteAltIcon from "@mui/icons-material/NoteAlt";
import GestureIcon from "@mui/icons-material/Gesture";
import ListIcon from "@mui/icons-material/List";

interface Props {}

const FileContent = () => {
  return (
    <FileContentContainer>
      <FileContentOptions>
        <OptionIconWrapper>
          <NoteAltIcon />
        </OptionIconWrapper>
        <OptionIconWrapper>
          <GestureIcon />
        </OptionIconWrapper>
        <OptionIconWrapper>
          <ListIcon />
        </OptionIconWrapper>
      </FileContentOptions>
      <FileContentBody>
        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptas rerum at nihil laboriosam. Tempora ipsa optio incidunt illum libero. U voluptate repellat deleniti sit aute aliquid aut iusto laudantium!</p> */}
      </FileContentBody>
    </FileContentContainer>
  );
};

export default FileContent;

const FileContentContainer = styled.div`
  /* flex: 1 1 auto; */
  width:100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
  padding-right: 0;
  /* height: 100vh; */
  background-color: var(--sidebarBackgroundColor);
`;

const FileContentBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px;
  background-color: var(--background);
  border-top: 1px solid var(--sidebarBorderColor);
  color: var(--text);
  height: 100vh;
  font-size:13px;
`;

const FileContentOptions = styled.div`
  color: var(--text);
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 10px;
  padding: 5px 10px 5px 10px;
  background-color: var(--sidebarBackgroundColor);
`;

const OptionIconWrapper = styled.div`
  background-color: transparent;
  color: var(--fileContentOptionsColor);
  &:hover {
    cursor: pointer;
    color: var(--text);
  }
`;

const IconWrapper = styled.div`
  border-left: 1px solid var(--sidebarBackgroundColor);
  border-radius: 0 5px 5px 0;
  height: 25px;
  background-color: var(--textInputFieldBackgroundColor);
  opacity: 0.6;

  > .MuiSvgIcon-root {
    color: var(--textInputFieldColor);
  }
  > .MuiSvgIcon-root:hover {
    color: var(--text);
    opacity: 1;
  }
`;
