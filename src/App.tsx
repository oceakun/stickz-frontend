import React, { useState } from "react";
import "./styles/theme.css";
import { ToggleButton } from "./components/button/ToggleButton";
import Navbar from "./components/Navbar";
import { ThemeContextProvider } from "./components/contexts/ThemeContext";
function App() {
  const [theme, setTheme] = useState("light");

  const toggleThemes = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className={`App ${theme}`}>
      {/* <h1>Hello World</h1> */}
      {/* <ToggleButton label="Here" onClick={toggleThemes} /> */}
      {/* <ThemeContextProvider> */}
        <Navbar />
      {/* </ThemeContextProvider> */}
    </div>
  );
}

export default App;
