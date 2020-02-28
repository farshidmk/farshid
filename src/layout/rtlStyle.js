import React from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import { StylesProvider, jssPreset } from "@material-ui/core/styles";
import MainPage from "./mainPage";

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function RTLStyle(props) {
  return (
    <StylesProvider jss={jss}>
      <MainPage />
    </StylesProvider>
  );
}
