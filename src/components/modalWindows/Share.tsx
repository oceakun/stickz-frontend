import ShareIcon from "@mui/icons-material/Share";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ModalWindowsDisplayNameContext } from "../contexts/ModalWindowsDisplayNameContext";

interface Props {}

const Share = () => {
  const modalWindowsDisplayNameContext = useContext(
    ModalWindowsDisplayNameContext
  );

  const [modalWindowName, setModalWindowName] = useState(
    modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow
  );

  return (
    <ShareContainer displayValue={modalWindowName}>
      <CloseSettingsIcon>
        <ShareIcon />
      </CloseSettingsIcon>
      <ShareCard>
        <ShareButtonInsidecard>Share</ShareButtonInsidecard>
      </ShareCard>
    </ShareContainer>
  );
};

export default Share;

const ShareContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  /* position: absolute; */
  /* z-index:500; */
  padding: 20px;
  /* pointer-events: none;   */
  /* pointer-events:none */
`;

const CloseSettingsIcon = styled.div`
  z-index: 5;
  margin-bottom: -15px;
  > .MuiSvgIcon-root {
    color: var(--toggleButtonColor);
    background-color: var(--background);
    border-radius: 50%;
    box-shadow: 0 0 0 0.5em var(--background);
  }

  &:hover {
    cursor: pointer;
  }
`;

const ShareCard = styled.div`
  background-color: var(--sidebarBackgroundColor);
  border-radius: 5px;
  padding: 40px 30px 20px 30px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: var(--text);
`;

const ShareButtonInsidecard = styled.div`
  border: none;
  color: var(--signoutButtonColor);
  padding: 0 5px 2px 5px;
  border-radius: 2px;
  font-weight: 500;
  font-size: 13px;
  opacity: 0.7;
  border: 1px solid var(--signoutButtonBorderColor);
  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;
