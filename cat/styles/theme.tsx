import { createTheme } from '@mui/material/styles';
import {pink, amber} from "@mui/material/colors"
let theme = createTheme({
  palette: {
    mode:'dark',
    primary: {
      main: pink[200],
    },
    secondary: {
      main: amber['A400'],
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