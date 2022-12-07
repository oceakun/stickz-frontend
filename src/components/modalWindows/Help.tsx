import QuestionMarkIcon from "@mui/icons-material/QuestionMark";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ModalWindowsDisplayNameContext } from "../contexts/ModalWindowsDisplayNameContext";

interface Props {}

const Help = () => {
  const modalWindowsDisplayNameContext = useContext(
    ModalWindowsDisplayNameContext
  );

  const [modalWindowName, setModalWindowName] = useState(
    modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow
  );

  return (
    <HelpContainer displayValue={modalWindowName}>
      <CloseSettingsIcon>
        <QuestionMarkIcon />
      </CloseSettingsIcon>
      <HelpCard>
        <p>Learn to best use stickza !!</p>
      </HelpCard>
    </HelpContainer>
  );
};

export default Help;

const HelpContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  /* position: absolute; */
  /* z-index:500; */
  padding: 20px;
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

const HelpCard = styled.div`
  background-color: var(--sidebarBackgroundColor);
  border-radius: 5px;
  padding: 20px 30px 20px 30px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: var(--text);
`;
