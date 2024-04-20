import { createTheme } from "@mui/material";

export const theme = createTheme({
    typography: {
      fontFamily: ['Lato', 'sans-serif'].join(','),
    },
    palette: {
      background: {
        wrap: '#899D9D',
        card: '#2C3531',
      },
      // text: {
      //   primary: '#173A5E',
      //   secondary: '#46505A',
      // },
      // action: {
      //   active: '#001E3C',
      // },
      // success: {
      //   dark: '#009688',
      // },
    },
  });
