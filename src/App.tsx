import React, { useState } from 'react';
import './styles/theme.css';
import "./App.css";
import { ToggleButton } from './components/button/ToggleButton';

function App() {

  const [theme, setTheme] = useState('light');

  const toggleThemes = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className={`App ${theme}`}>
      <h1>Hello World</h1>
      <ToggleButton label="Here" onClick={toggleThemes} />
    </div >
  );
}

export default App;
