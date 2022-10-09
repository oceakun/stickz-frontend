import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../components/contexts/ThemeContext";
import { ThemeModeContext } from "../components/contexts/ThemeModeContext";

interface Props {}

const Home = () => {
  const theme = useContext(ThemeContext);
  const themeModeContext = useContext(ThemeModeContext);
  const [themeToBeApplied, setThemeToBeApplied] = useState(theme.light);

  useEffect(() => {
    themeModeContext?.themeMode?.theme === "light"
      ? setThemeToBeApplied(theme.light)
      : setThemeToBeApplied(theme.dark);
  }, [themeModeContext?.themeMode?.theme]);

  return (
    <HomeContainer themeticProp={themeToBeApplied}>
      <Navbar />
      <Outlet />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  background-color: ${(props: any) => props.themeticProp.background};
`;
