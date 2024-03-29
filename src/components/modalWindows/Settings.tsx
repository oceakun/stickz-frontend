import SettingsIcon from "@mui/icons-material/Settings";
import { useContext, useState } from "react";
import styled from "styled-components";
import { ModalWindowsDisplayNameContext } from "../contexts/ModalWindowsDisplayNameContext";

interface Props {}

type onClickModalTypes = {
  displayStatus: string;
};

const Settings = () => {
  const modalWindowsDisplayNameContext = useContext(
    ModalWindowsDisplayNameContext
  );

  const [modalWindowName, setModalWindowName] = useState(
    modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow
  );

  return (
    <SettingsContainer displayValue={modalWindowName}>
      <CloseSettingsIcon>
        <SettingsIcon />
      </CloseSettingsIcon>
      <SettingsCard>
        {/* <p>Settings</p> */}
        <p>Fonts</p>
        <p>Default Themes</p>
        <p>Bulletins</p>
      </SettingsCard>
    </SettingsContainer>
  );
};

export default Settings;

const SettingsContainer = styled.div`
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

const SettingsCard = styled.div`
  background-color: var(--sidebarBackgroundColor);
  border-radius: 5px;
  padding: 20px 30px 20px 30px;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  color: var(--text);
`;
