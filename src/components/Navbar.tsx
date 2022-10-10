import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { ThemeModeContext } from "./contexts/ThemeModeContext";
import styled from "styled-components";
import Brightness6Icon from "@mui/icons-material/Brightness6";
import { useNavigate } from "react-router-dom";

interface Props {}

const Navbar = () => {
  const navigate = useNavigate();
  const theme = useContext(ThemeContext);
  const themeModeContext = useContext(ThemeModeContext);
  const [themeToBeApplied, setThemeToBeApplied] = useState(theme.light);

  const [notesButtonBackgroundColor, setNotesButtonBackgroundColor] = useState(
    themeToBeApplied.navbarButtonHoverAndActiveColor
  );

  const [listsButtonBackgroundColor, setListsButtonBackgroundColor] =
    useState("transparent");

  const [drawButtonBackgroundColor, setDrawButtonBackgroundColor] =
    useState("transparent");

  useEffect(() => {
    themeModeContext?.themeMode?.theme === "light"
      ? setThemeToBeApplied(theme.light)
      : setThemeToBeApplied(theme.dark);
  }, [themeModeContext?.themeMode?.theme]);

  const themeToggleHandler = (e: any) => {
    e.preventDefault();
    if (themeModeContext?.themeMode?.theme === "light") {
      themeModeContext?.setThemeMode({ theme: "dark" });
    } else {
      themeModeContext?.setThemeMode({ theme: "light" });
    }
  };

  useEffect(() => {
    if (notesButtonBackgroundColor !== "transparent") {
      setNotesButtonBackgroundColor(
        themeToBeApplied.navbarButtonHoverAndActiveColor
      );
    }
    if (listsButtonBackgroundColor !== "transparent") {
      setListsButtonBackgroundColor(
        themeToBeApplied.navbarButtonHoverAndActiveColor
      );
    }
    if (drawButtonBackgroundColor !== "transparent") {
      setDrawButtonBackgroundColor(
        themeToBeApplied.navbarButtonHoverAndActiveColor
      );
    }
  }, [themeToBeApplied]);

  const handleNotesButton = (e: any) => {
    e.preventDefault();
    navigate("/home/notes");
    setNotesButtonBackgroundColor(
      themeToBeApplied.navbarButtonHoverAndActiveColor
    );
    setListsButtonBackgroundColor("transparent");
    setDrawButtonBackgroundColor("transparent");
  };

  const handleListsButton = (e: any) => {
    e.preventDefault();
    navigate("/home/lists");
    setNotesButtonBackgroundColor("transparent");
    setListsButtonBackgroundColor(
      themeToBeApplied.navbarButtonHoverAndActiveColor
    );
    setDrawButtonBackgroundColor("transparent");
  };

  const handleDrawButton = (e: any) => {
    e.preventDefault();
    navigate("/home/draw");
    setNotesButtonBackgroundColor("transparent");
    setListsButtonBackgroundColor("transparent");
    setDrawButtonBackgroundColor(
      themeToBeApplied.navbarButtonHoverAndActiveColor
    );
  };

  return (
    <NavbarContainer themeticProp={themeToBeApplied}>
      <NavbarLogo
        themeticProp={themeToBeApplied}
        onClick={() => navigate("/landingpage")}
      >
        stickza
      </NavbarLogo>
      <NavbarOptions>
        <NavbarButton
          themeticProp={themeToBeApplied}
          bgColor={notesButtonBackgroundColor}
          onClick={handleNotesButton}
        >
          NOTES
        </NavbarButton>
        <NavbarButton
          themeticProp={themeToBeApplied}
          bgColor={listsButtonBackgroundColor}
          onClick={handleListsButton}
        >
          LISTS
        </NavbarButton>
        <NavbarButton
          themeticProp={themeToBeApplied}
          bgColor={drawButtonBackgroundColor}
          onClick={handleDrawButton}
        >
          DRAW
        </NavbarButton>
        <NavbarToggleButton
          themeticProp={themeToBeApplied}
          onClick={themeToggleHandler}
        >
          <Brightness6Icon />
        </NavbarToggleButton>
        <NavbarSignOutButton
          themeticProp={themeToBeApplied}
          onClick={() => navigate("/signin")}
        >
          Sign Out
        </NavbarSignOutButton>
      </NavbarOptions>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.div`
  width: 100vw;
  background-color: ${(props: any) => props.themeticProp.navbarBackground};
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
  color: ${(props: any) => props.themeticProp.text};
  &:hover {
    cursor: pointer;
  }
`;

const NavbarOptions = styled.div`
  padding:0 17px 0 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  gap: 5vw;
`;

const NavbarButton = styled.div`
  border: none;
  color: ${(props: any) => props.themeticProp.text};
  border-bottom: 1px transparent solid;
  padding: 0 5px 2px 5px;
  border-radius: 4px;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  background-color: ${(props: any) => props.bgColor};
  &:hover {
    cursor: pointer;
    opacity: 1;
    background-color: #f0f0bf;
    background-color: ${(props: any) => props.bgColor};
    color: ${(props: any) => props.themeticProp.navbarButtonActiveTextColor};
  }
`;

const NavbarSignOutButton = styled.div`
  border: none;
  color: ${(props: any) => props.themeticProp.text};
  border-bottom: 1px transparent solid;
  padding: 0 5px 2px 5px;
  border-radius: 2px;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  background-color: ${(props: any) =>
    props.themeticProp.signoutButtonBackgroundColor};
  border: 1px solid
    ${(props: any) => props.themeticProp.signoutButtonBorderColor};
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
`;

const NavbarToggleButton = styled.div`
  border: none;
  background-color: ${(props: any) => props.themeticProp.navbarBackground};
  color: ${(props: any) => props.themeticProp.text};
  border-radius: 0px;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
  }
  > .MuiSvgIcon-root {
    color: ${(props: any) => props.themeticProp.toggleButtonColor};
  }
`;
