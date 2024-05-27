import { createTheme } from "@mui/material";
import {  grey, purple } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: purple[100],
      dark: grey[100],
      light: grey[300],
      contrastText: "black",
    },
    secondary: {
      main: "#9c27b0",
      light: "#ba68c8",
      dark: "#7b1fa2",
      contrastText: "#fff",
    },
    background: {
      paper: "#fff",
      default: "#d3d3d382",
    },
    info: {
      main: "#121212"
    }
  },
});
