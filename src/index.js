import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Resume from "./components/resume";

const theme = createMuiTheme({
  palette: {
    common: { black: "#000", white: "#fff" },
    background: {
      paper: "#008744",
      default: "#ffa700"
    },
    primary: {
      light: "#d62d20",
      main: "#0057e7",
      dark: "#36454f",
      contrastText: "#fff4e6"
    },
    secondary: {
      light: "#536878",
      main: "#536878",
      dark: "rgba(67, 128, 6, 1)",
      contrastText: "white"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "#fff4e6 ",
      secondary: "#e5e6eb ",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    },
    direction: "rtl"
  }
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    {/* <App /> */}
    <Resume />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
