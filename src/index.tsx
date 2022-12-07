import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./components/contexts/ThemeContext";
import { ThemeModeContextProvider } from "./components/contexts/ThemeModeContext";
import { FileSectionStatusContextProvider } from "./components/contexts/FileSectionStatusContext";
import { ModalWindowsDisplayNameContextProvider } from "./components/contexts/ModalWindowsDisplayNameContext";
import { ModalWindowsDisplayValueContextProvider } from "./components/contexts/ModalWindowDisplayValueContext";
import { FoldersAndFilesRecordContextProvider } from "./components/contexts/FoldersAndFilesRecordContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeModeContextProvider>
        <FileSectionStatusContextProvider>
          <ModalWindowsDisplayNameContextProvider>
            <ModalWindowsDisplayValueContextProvider>
              <FoldersAndFilesRecordContextProvider>
                <App />
              </FoldersAndFilesRecordContextProvider>
            </ModalWindowsDisplayValueContextProvider>
          </ModalWindowsDisplayNameContextProvider>
        </FileSectionStatusContextProvider>
      </ThemeModeContextProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
