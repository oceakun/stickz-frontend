import { useContext, useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import { ThemeContext } from "./components/contexts/ThemeContext";
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

function App() {
  
  const theme = useContext(ThemeContext);
  const themeModeContext = useContext(ThemeModeContext);
  const [themeToBeApplied, setThemeToBeApplied] = useState(theme.light);

  useEffect(() => {
    themeModeContext?.themeMode?.theme === "light"
      ? setThemeToBeApplied(theme.light)
      : setThemeToBeApplied(theme.dark);
  }, [themeModeContext?.themeMode?.theme]);

  return (
    <AppContainer themeticProp={themeToBeApplied}>
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
background-color: ${(props: any) => props.themeticProp.background};
width:100vw;
height:100vh;
position:fixed;
`;