import { useContext, useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import styled from "styled-components";
import { ThemeModeContext } from "./components/contexts/ThemeModeContext";
import { FileSectionStatusContext } from "./components/contexts/FileSectionStatusContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./components/threeMainUtilies/Notes";
import Lists from "./components/threeMainUtilies/Lists";
import Draw from "./components/threeMainUtilies/Draw";
import SignUp from "./pages/authPages/SignUp";
import SignIn from "./pages/authPages/SignIn";
import LandingPage from "./pages/LandingPage";
import NoMatch from "./pages/NoMatch";
import OriginalOutletPage from "./pages/OriginalOutletPage";

function App() {
  // "flash of wrong theme"
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

  useEffect(() => {
    console.log("app - useEffect called");
    console.log(
      "themeModeContext?.themeMode?.theme : ",
      themeModeContext?.themeMode?.theme
    );
    setTheme(themeModeContext?.themeMode?.theme);
  }, [themeModeContext?.themeMode?.theme]);

  useEffect(() => {
    console.log("app - useEffect called");
    console.log(
      "fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut : ",
      fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut
    );
    setFileSectionStatus(
      fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut
    );
  }, [fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut]);

  return (
    <AppContainer data-theme={theme} fileSectionStatus={fileSectionStatus}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OriginalOutletPage />}>
            <Route index element={<LandingPage />} />
            <Route path="landingpage" element={<LandingPage />} />
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="signin" element={<SignIn />} />
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
  align-items:flex-start;
position:relative;
  height: 100%;
  width: 100%;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
  }
`;
