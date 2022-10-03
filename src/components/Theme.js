import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#c850c0',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          width: "15em"
        },
      },
    },
  },
});

export default theme;
