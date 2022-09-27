import { createTheme } from '@mui/material/styles';
import {amber, indigo, pink} from "@mui/material/colors"
let theme = createTheme({
  palette: {

    mode:'dark',
    primary: {
      main: amber[300],
      light: amber[100],
      dark: amber[500]
    },
    secondary: {
      main: indigo[300],
      light: indigo[100],
      dark: indigo[500],
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