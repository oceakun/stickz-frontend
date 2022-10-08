import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./components/contexts/ThemeContext";
import { ThemeModeContextProvider } from "./components/contexts/ThemeModeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeModeContextProvider>
        <App />
      </ThemeModeContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
