import { createContext, useState } from "react";

export type ThemeModeType = {
    theme: string|null;
  };
  
type ThemeModeContextType = {
    themeMode: ThemeModeType | null;
    setThemeMode: React.Dispatch<React.SetStateAction<ThemeModeType | null>>;
};
   
type ThemeModeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeModeContext = createContext<ThemeModeContextType | null>(null);

export const ThemeModeContextProvider = ({
  children,
}: ThemeModeContextProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeModeType | null>({
    theme: JSON.parse(localStorage.getItem("theme")||"{}"),
  });
  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  );
};
