import { useContext, useState, useEffect } from "react";
import useLocalStorage from "use-local-storage";
import styled from "styled-components";
import { ThemeModeContext } from "./components/contexts/ThemeModeContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Notes from "./pages/Notes";
import Lists from "./pages/Lists";
import Draw from "./pages/Draw";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import LandingPage from "./pages/LandingPage";
import NoMatch from "./pages/NoMatch";
import OriginalOutletPage from "./pages/OriginalOutletPage";
import "./App.css";

function App() {
  // "flash of wrong theme"
  const themeModeContext = useContext(ThemeModeContext);
  const [theme, setTheme] = useLocalStorage(
    "theme",
    themeModeContext?.themeMode?.theme
  );
  
  console.log("parsed theme : ", theme);

  useEffect(() => {
    console.log("app - useEffect called");
    setTheme(themeModeContext?.themeMode?.theme);
  }, [themeModeContext?.themeMode?.theme]);

  return (
    <AppContainer data-theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OriginalOutletPage />}>
            <Route index element={<LandingPage />} />
            <Route path="landingpage" element={<LandingPage />} />
            <Route path="home" element={<Home />}>
              <Route index element={<Notes />} />
              <Route path="notes" element={<Notes />} />
              <Route path="lists" element={<Lists />} />
              <Route path="draw" element={<Draw />} />
              <Route path="*" element={<NoMatch />} />
            </Route>
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
  width: 100vw;
  height: 100vh;
  position: fixed;
`;