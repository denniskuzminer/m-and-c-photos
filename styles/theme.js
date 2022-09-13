import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    background: {
      // default: "#e6e5e3",
      default: "#fff",
    },
    primary: {
      main: "#001443",
      title: "#8b9da3",
    },
    secondary: {
      main: "#baebf1",
      // bddde2
      light: "#ffffff",
    },
  },
  typography: {
    // fontFamily: ["Alegreya Sans SC", "sans-serif"].join(","),
    fontFamily: ["Montserrat Alternates", "sans-serif"].join(","),

    secondary: {
      // fontFamily: ["Josefin Sans", "sans-serif"].join(","),
      fontFamily: ["League Script", "cursive"].join(","),
    },
  },
});

export default theme;
