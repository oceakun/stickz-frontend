// for creating a context
import { createContext, useState } from "react";
// points to a particular theme
import { theme } from "./theme";

// type decklaration for the children props
type ThemeContextProviderProps = {
  children: React.ReactNode
};
// this component is a context for the theme object in the theme.ts file

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

