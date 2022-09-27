import { createTheme } from '@mui/material/styles';
import {amber, indigo, pink} from "@mui/material/colors"
let theme = createTheme({
  palette: {
    background: {
      default: indigo['100']
    },

    mode:'light',
    primary: {
      main: amber[400],
      light: amber[100],
      dark: amber[500]
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