import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import { useNavigate } from "react-router-dom";
import useLocalStorage from "use-local-storage";
import { ThemeModeContext } from "../components/contexts/ThemeModeContext";

interface Props {}

const Navbar = () => {
  const navigate = useNavigate();
  const themeModeContext = useContext(ThemeModeContext);

  const [notesButtonBackgroundColor, setNotesButtonBackgroundColor] = useState(
    window.location.pathname == "/home/notes" ||
      window.location.pathname == "/home"
      ? themeModeContext?.themeMode?.theme
      : "transparent"
  );
  const [listsButtonBackgroundColor, setListsButtonBackgroundColor] = useState(
    window.location.pathname == "/home/lists"
      ? themeModeContext?.themeMode?.theme
      : "transparent"
  );

  const [drawButtonBackgroundColor, setDrawButtonBackgroundColor] = useState(
    window.location.pathname == "/home/draw"
      ? themeModeContext?.themeMode?.theme
      : "transparent"
  );

  const switchTheme = () => {
    if (themeModeContext?.themeMode?.theme === "light") {
      themeModeContext?.setThemeMode({ theme: "dark" });
    } else {
      themeModeContext?.setThemeMode({ theme: "light" });
    }
  };

  useEffect(() => {
    if (notesButtonBackgroundColor !== "transparent") {
      setNotesButtonBackgroundColor(
        themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
      );
    }
    if (listsButtonBackgroundColor !== "transparent") {
      setListsButtonBackgroundColor(
        themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
      );
    }
    if (drawButtonBackgroundColor !== "transparent") {
      setDrawButtonBackgroundColor(
        themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
      );
    }
  }, [themeModeContext?.themeMode?.theme]);

  const handleNotesButton = (e: any) => {
    e.preventDefault();
    navigate("/home/notes");
    setNotesButtonBackgroundColor(
      themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
    );
    setListsButtonBackgroundColor("transparent");
    setDrawButtonBackgroundColor("transparent");
  };

  const handleListsButton = (e: any) => {
    e.preventDefault();
    navigate("/home/lists");
    setNotesButtonBackgroundColor("transparent");
    setListsButtonBackgroundColor(
      themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
    );
    setDrawButtonBackgroundColor("transparent");
  };

  const handleDrawButton = (e: any) => {
    e.preventDefault();
    navigate("/home/draw");
    setNotesButtonBackgroundColor("transparent");
    setListsButtonBackgroundColor("transparent");
    setDrawButtonBackgroundColor(
      themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
    );
  };

  return (
    <NavbarContainer>
      <NavbarLogo onClick={() => navigate("/landingpage")}>stickza</NavbarLogo>
      <NavbarOptions>
        <NavbarButton
          bgColor={notesButtonBackgroundColor}
          onClick={handleNotesButton}
        >
          NOTES
        </NavbarButton>
        <NavbarButton
          bgColor={listsButtonBackgroundColor}
          onClick={handleListsButton}
        >
          LISTS
        </NavbarButton>
        <NavbarButton
          bgColor={drawButtonBackgroundColor}
          onClick={handleDrawButton}
        >
          DRAW
        </NavbarButton>
        <NavbarToggleButton onClick={switchTheme}>
          <Brightness6Icon />
        </NavbarToggleButton>
        <NavbarSignOutButton onClick={() => navigate("/signin")}>
          Sign Out
        </NavbarSignOutButton>
      </NavbarOptions>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100vw;
  background-color: var(--navbarBackground);
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 3vh;
    width: 100vw;
    > hr {
      color: white;
      width: 100%;
    }
  }
`;

const NavbarLogo = styled.div`
  border: none;
  font-size: 20px;
  background-color: tansparent;
  color: var(--text);
  &:hover {
    cursor: pointer;
  }
`;

const NavbarOptions = styled.div`
  padding: 0 17px 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 5vw;
`;

const NavbarButton = styled.div`
  color: var(--text);
  border-bottom: 5px transparent solid;
  padding: 0 5px 2px 5px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  border: 1px solid ${(props: any) => props.bgColor};
  &:hover {
    cursor: pointer;
    opacity: 1;
    color: var(--navbarButtonActiveTextColor);
  }
`;

const NavbarSignOutButton = styled.div`
  border: none;
  color: var(--text);
  padding: 0 5px 2px 5px;
  border-radius: 2px;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  background-color: var(--signoutButtonBackgroundColor);
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const NavbarToggleButton = styled.div`
  border: none;
  background-color: var(--navbarBackground);
  color: var(--text);
  border-radius: 0px;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  > .MuiSvgIcon-root {
    color: var(--toggleButtonColor);
  }
`;
