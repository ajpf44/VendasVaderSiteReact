import { createTheme } from '@mui/material';
import { cyan, green, grey, purple, yellow } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main:grey[700],
      dark:grey[800],
      light:grey[500],
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
