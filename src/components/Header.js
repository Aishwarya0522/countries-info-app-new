import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>Countries Information</h1>
      <button onClick={toggleTheme}>Toggle Dark Mode</button>
    </header>
  );
};

export default Header;
