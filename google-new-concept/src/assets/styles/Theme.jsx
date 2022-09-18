import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import GlobalContext from "../../context/GlobalContext";

const lightTheme = {
  colors: {
    primary: "#ffffff",
    secondary: "#f8f9fa",
    tertiary: "#dfe1e5",
    font: "#3c4043",
    fontHover: "#202124",
    shadowPrimary: "0px 10px 10px 2px #66666699",
    shadowSecondary: "0px 10px 10px 2px #3333339c",
  },
};

const darkTheme = {
  colors: {
    primary: "#121714",
    secondary: "#202124",
    tertiary: "#3c4043",
    font: "#d8d8d9",
    fontHover: "#ffffff",
    shadowPrimary: "0px 10px 10px 2px #57575794",
    shadowSecondary: "0px 10px 10px 2px #575757db",
  },
};

const Theme = ({ children }) => {
  const { states } = useContext(GlobalContext);
  const { theme } = states;
  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      {children}
    </ThemeProvider>
  );
};

export default Theme;
