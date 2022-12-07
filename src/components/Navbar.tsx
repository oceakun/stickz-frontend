import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useNavigate } from "react-router-dom";
import { ThemeModeContext } from "../components/contexts/ThemeModeContext";
import { FileSectionStatusContext } from "./contexts/FileSectionStatusContext";
import MenuIcon from "@mui/icons-material/Menu";

interface Props {}

const Navbar = () => {
  const navigate = useNavigate();
  const themeModeContext = useContext(ThemeModeContext);

  const fileSectionStatusContext = useContext(FileSectionStatusContext);

  // const [notesButtonBackgroundColor, setNotesButtonBackgroundColor] = useState(
  //   window.location.pathname == "/home/notes" ||
  //     window.location.pathname == "/home"
  //     ? themeModeContext?.themeMode?.theme
  //     : "transparent"
  // );
  
  // const [listsButtonBackgroundColor, setListsButtonBackgroundColor] = useState(
  //   window.location.pathname == "/home/lists"
  //     ? themeModeContext?.themeMode?.theme
  //     : "transparent"
  // );

  // const [drawButtonBackgroundColor, setDrawButtonBackgroundColor] = useState(
  //   window.location.pathname == "/home/draw"
  //     ? themeModeContext?.themeMode?.theme
  //     : "transparent"
  // );

  const switchTheme = () => {
    if (themeModeContext?.themeMode?.theme === "light") {
      themeModeContext?.setThemeMode({ theme: "dark" });
    } else if(themeModeContext?.themeMode?.theme === "dark"){
      themeModeContext?.setThemeMode({ theme: "mid" });
    }
    else {
      themeModeContext?.setThemeMode({ theme: "light" });
    }
  };

  const switchFileSectionDisplayStatus = () => {
    console.log("foldersection toggled");
    if (
      fileSectionStatusContext?.fileSectionStatus?.fileSectionOpenOrShut ===
      "open"
    ) {
      fileSectionStatusContext?.setFileSectionStatus({
        fileSectionOpenOrShut: "shut",
      });
    } else {
      fileSectionStatusContext?.setFileSectionStatus({
        fileSectionOpenOrShut: "open",
      });
    }
  };

  // useEffect(() => {
  //   if (notesButtonBackgroundColor !== "transparent") {
  //     setNotesButtonBackgroundColor(
  //       themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
  //     );
  //   }
  //   if (listsButtonBackgroundColor !== "transparent") {
  //     setListsButtonBackgroundColor(
  //       themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
  //     );
  //   }
  //   if (drawButtonBackgroundColor !== "transparent") {
  //     setDrawButtonBackgroundColor(
  //       themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
  //     );
  //   }
  // }, [themeModeContext?.themeMode?.theme]);

  // const handleNotesButton = (e: any) => {
  //   e.preventDefault();
  //   navigate("/home/notes");
  //   setNotesButtonBackgroundColor(
  //     themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
  //   );
  //   setListsButtonBackgroundColor("transparent");
  //   setDrawButtonBackgroundColor("transparent");
  // };

  // const handleListsButton = (e: any) => {
  //   e.preventDefault();
  //   navigate("/home/lists");
  //   setNotesButtonBackgroundColor("transparent");
  //   setListsButtonBackgroundColor(
  //     themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
  //   );
  //   setDrawButtonBackgroundColor("transparent");
  // };

  // const handleDrawButton = (e: any) => {
  //   e.preventDefault();
  //   navigate("/home/draw");
  //   setNotesButtonBackgroundColor("transparent");
  //   setListsButtonBackgroundColor("transparent");
  //   setDrawButtonBackgroundColor(
  //     themeModeContext?.themeMode?.theme === "light" ? "#f1f111" : "#7d53a7"
  //   );
  // };

  return (
    <NavbarContainer>
      <NavbarFirstHalf>
        <NavbarMenuIcon onClick={switchFileSectionDisplayStatus}>
          <MenuIcon />
        </NavbarMenuIcon>

        <NavbarLogo onClick={() => navigate("/landingpage")}>
          stickza
        </NavbarLogo>
      </NavbarFirstHalf>

      <NavbarOptionsSecondHalf>
        {/* <NavbarButton
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
        </NavbarButton> */}
        <NavbarToggleButton onClick={switchTheme}>
          <LightModeIcon />
        </NavbarToggleButton>
        <NavbarSignOutButton onClick={() => navigate("/signin")}>
          Sign Out
        </NavbarSignOutButton>
      </NavbarOptionsSecondHalf>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  background-color: var(--navbarBackground);
  display: flex;
  border-bottom: 1px solid var(--fileContentBackgroundColor);
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: .5em;
  height:10%;
  width: 100%;
  flex:none;
  order:0;
  box-sizing: border-box;
`;

const NavbarFirstHalf = styled.div`
  /* padding: 0 20px 0 0; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
`;

const NavbarMenuIcon = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  color: var(--sidebarOptionsColor);
  opacity:0.8;
  &:hover {
  opacity:1;
    cursor: pointer;
    color: var(--iconWrapperHoverColor);
  }
`;

const NavbarLogo = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-start;
  padding:0 0 5px 0;
  color: var(--toggleButtonColor);
  font-size:18px;
  &:hover {
    cursor: pointer;
  }
`;

const NavbarOptionsSecondHalf = styled.div`
  /* padding: 0 20px 0 0; */
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
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
  color: var(--signoutButtonColor);
  padding: 0 5px 2px 5px;
  border-radius: 2px;
  font-weight: 500;
  font-size: 13px;
  opacity: 0.8;
  border: 1px solid var(--signoutButtonBorderColor);
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
