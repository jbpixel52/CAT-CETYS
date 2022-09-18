import { createTheme } from '@mui/material/styles';
import {amber, indigo} from "@mui/material/colors"
let theme = createTheme({
  palette: {
    mode:'light',
    primary: {
      main: indigo[500],
      light: indigo[100],
      dark: indigo[800]
    },
    secondary: {
      main: amber[400],
      light: amber[100],
      dark: amber[700],
    },
  },
});

theme = createTheme(theme, {
  palette: {
    mode:theme.palette.mode,
    info: {
      main: theme.palette.primary.main,
      secondary: theme.palette.secondary.main
    },
  },
});


export default theme;