import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import MainBody from "../components/MainBody";
import Delete from "../components/modalWindows/Delete";
import Share from "../components/modalWindows/Share";
import Settings from "../components/modalWindows/Settings";
import Help from "../components/modalWindows/Help";
import Download from "../components/modalWindows/Download";
import { ModalWindowsDisplayNameContext } from "../components/contexts/ModalWindowsDisplayNameContext";
import { ModalWindowsDisplayValueContext } from "../components/contexts/ModalWindowDisplayValueContext";

interface Props {}

const Home = () => {
  const modalWindowsDisplayNameContext = useContext(
    ModalWindowsDisplayNameContext
  );
  const [modalWindowName, setModalWindowName] = useState(
    modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow
  );

  const modalWindowsDisplayValueContext = useContext(ModalWindowsDisplayValueContext);
  const [modalDisplayValue, setModalDisplayValue] = useState(modalWindowsDisplayValueContext?.modalWindowsDisplayValue?.modalWindowDisplayValue);

  useEffect(() => {
    setModalWindowName(modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow);
  }, [
    modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow,
  ]);

  const handleModalClose = () => {
    console.log("inside settings");
    modalWindowsDisplayNameContext?.setModalWindowsDisplayName({
      whichModalWindow: "none",
    });
    modalWindowsDisplayValueContext?.setModalWindowsDisplayValue({
      modalWindowDisplayValue: "none",
    });
  }

  return (
    <HomeContainer>
      <ModalWindowContainer
        onClick={handleModalClose}
        displayValue={modalWindowsDisplayValueContext?.modalWindowsDisplayValue?.modalWindowDisplayValue}>
        {modalWindowName === "delete" ? (
          <Delete />
        ) : modalWindowName === "share" ? (
          <Share />
        ) : modalWindowName === "download" ? (
          <Download />
        ) : modalWindowName === "help" ? (
          <Help />
        ) :  modalWindowName === "settings" ? (
          <Settings />
        ):(
          <></>
        )}
      </ModalWindowContainer>
      <Navbar />
      <MainBody />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-color: var(--background);
  display: flex;
  flex-flow: column nowrap;
  height: 100vh;
  width: 100%;
`;

const ModalWindowContainer = styled.div`
display: ${(props: any) => (props.displayValue)};
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 400;
  background-color: var(--background);
  opacity: 0.9;
`;