import { createTheme } from '@mui/material/styles';
import {pink, amber} from "@mui/material/colors"
let theme = createTheme({
  palette: {
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
    info: {
      main: theme.palette.primary.main,
      secondary: theme.palette.secondary.main
    },
  },
});


export default theme;