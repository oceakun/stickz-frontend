import { useContext, useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import styled from "styled-components";
import { ThemeModeContext } from "./components/contexts/ThemeModeContext";
import { FileSectionStatusContext } from "./components/contexts/FileSectionStatusContext";
import { ModalWindowsDisplayNameContext } from "./components/contexts/ModalWindowsDisplayNameContext";
import { ModalWindowsDisplayValueContext } from "./components/contexts/ModalWindowDisplayValueContext";
import { FoldersAndFilesRecordContext } from "./components/contexts/FoldersAndFilesRecordContext";
import { FilesForSidebar } from "./components/sidebar/FilesForSidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/Register";
import SignIn from "./pages/LogIn";
import LandingPage from "./pages/LandingPage";
import NoMatch from "./pages/NoMatch";
import OriginalOutletPage from "./pages/OriginalOutletPage";

function App() {
  const themeModeContext = useContext(ThemeModeContext);
  const [theme, setTheme] = useLocalStorage(
    "theme",
    themeModeContext?.themeMode?.theme
  );

  const fileSectionStatusContext = useContext(FileSectionStatusContext);

  const [fileSectionStatus, setFileSectionStatus] = useLocalStorage(
    "fileSectionOpenOrShut",
    fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut
  );

  // const modalWindowsDisplayNameContext = useContext(
  //   ModalWindowsDisplayNameContext
  // );
  // const [modalWindowName, setModalWindowName] = useLocalStorage(
  //   "whichModalWindow",
  //   modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow
  // );

  // const modalWindowsDisplayValueContext = useContext(
  //   ModalWindowsDisplayValueContext
  // );
  // const [modalWindowValue, setModalWindowValue] = useLocalStorage(
  //   "modalWindowsDisplayValue",
  //   modalWindowsDisplayValueContext?.modalWindowsDisplayValue
  //     ?.modalWindowDisplayValue
  // );

  // const foldersAndFilesRecordContext = useContext(FoldersAndFilesRecordContext);
  // const [foldersAndFilesRecord, setFoldersAndFilesRecord] = useLocalStorage(
  //   "modalWindowsDisplayValue",
  //   foldersAndFilesRecordContext?.foldersAndFilesRecord?.foldersAndFiles
  // );

  useEffect(() => {
    setTheme(themeModeContext?.themeMode?.theme);
  }, [themeModeContext?.themeMode?.theme]);

  useEffect(() => {
    setFileSectionStatus(
      fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut
    );
  }, [fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut]);

  // useEffect(() => {
  //   setModalWindowName(
  //     modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow
  //   );
  // }, [
  //   modalWindowsDisplayNameContext?.modalWindowsDisplayName?.whichModalWindow,
  // ]);

  // useEffect(() => {
  //   setModalWindowValue(
  //     modalWindowsDisplayValueContext?.modalWindowsDisplayValue
  //       ?.modalWindowDisplayValue
  //   );
  // }, [
  //   modalWindowsDisplayValueContext?.modalWindowsDisplayValue
  //     ?.modalWindowDisplayValue,
  // ]);
  
  // useEffect(() => {
  //   setFoldersAndFilesRecord(
  //     foldersAndFilesRecordContext?.foldersAndFilesRecord?.foldersAndFiles
  //   );
  // }, [
  //   foldersAndFilesRecordContext?.foldersAndFilesRecord?.foldersAndFiles
  // ]);

  return (
    <AppContainer data-theme={theme} fileSectionStatus={fileSectionStatus}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OriginalOutletPage />}>
            <Route index element={<Home />} />
            {/* <Route path="landingpage" element={<LandingPage />} /> */}
            <Route path="home" element={<Home />} />
            <Route path="register" element={<SignUp />} />
            <Route path="login" element={<SignIn />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
const AppContainer = styled.div`
  background-color: var(--background);
  display: flex;
  align-items: flex-start;
  position: relative;
  height: 100%;
  width: 100%;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;
