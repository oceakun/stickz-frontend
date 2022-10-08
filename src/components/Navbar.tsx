import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { ThemeModeContext } from "./contexts/ThemeModeContext";
import styled from "styled-components";
import Brightness6Icon from "@mui/icons-material/Brightness6";

interface Props {}

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const themeModeContext = useContext(ThemeModeContext);
  const [themeToBeApplied, setThemeToBeApplied] = useState(theme.light);

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

  return (
    <NavbarContainer themeticProp={themeToBeApplied}>
      <NavbarLogo themeticProp={themeToBeApplied}>stickza</NavbarLogo>
      <NavbarOptions>
        <NavbarButton themeticProp={themeToBeApplied}>NOTES</NavbarButton>
        <NavbarButton themeticProp={themeToBeApplied}>LISTS</NavbarButton>
        <NavbarButton themeticProp={themeToBeApplied}>DRAW</NavbarButton>
        <NavbarToggleButton
          themeticProp={themeToBeApplied}
          onClick={themeToggleHandler}
        >
          <Brightness6Icon />
        </NavbarToggleButton>
        <NavbarSignOutButton themeticProp={themeToBeApplied}>
          SIGN OUT
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
  border-radius: 0px;
  /* font-family: "Bungee Spice", cursive; */
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  &:hover {
    cursor: pointer;
    opacity: 1;
    background-color: #f0f0bf;
    background-color: ${(props: any) =>
      props.themeticProp.navbarButtonHoverColor};
    color: ${(props: any) => props.themeticProp.navbarButtonActiveTextColor};
  }
`;

const NavbarSignOutButton = styled.div`
  border: none;
  /* signoutButtonBackgroundColor */
  color: ${(props: any) => props.themeticProp.text};
  border-bottom: 1px transparent solid;
  padding: 0 5px 2px 5px;
  border-radius: 2px;
  font-weight: 500;
  font-size: 14px;
  opacity: 0.8;
  background-color: ${(props: any) =>
    props.themeticProp.signoutButtonBackgroundColor};
  color: #4f4d4d;
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
