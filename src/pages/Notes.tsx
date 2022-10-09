import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { ThemeContext } from "../components/contexts/ThemeContext";
import { ThemeModeContext } from "../components/contexts/ThemeModeContext";

interface Props {}

const Notes = () => {

  const theme = useContext(ThemeContext);
  const themeModeContext = useContext(ThemeModeContext);
  const [themeToBeApplied, setThemeToBeApplied] = useState(theme.light);

  useEffect(() => {
    themeModeContext?.themeMode?.theme === "light"
      ? setThemeToBeApplied(theme.light)
      : setThemeToBeApplied(theme.dark);
  }, [themeModeContext?.themeMode?.theme]);

  return <NotesContainer themeticProp={themeToBeApplied}>notes</NotesContainer>;
};

export default Notes;

const NotesContainer = styled.div`
color: ${(props: any) => props.themeticProp.text};
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 40px;
`;
