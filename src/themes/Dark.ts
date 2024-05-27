import { createTheme } from '@mui/material';
import {  grey, purple, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main:purple[700],
      dark: grey[500],
      light:yellow[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: purple[500],
      dark: purple[500],
      light: purple[500],
      contrastText: '#ffffff',
    },
    background: {
      paper: '#eeee',
      default: '#000',
    }
  }
});
