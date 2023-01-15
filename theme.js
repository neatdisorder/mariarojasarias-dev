import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
  fonts: {
    heading: "'Roboto', sans-serif",
    body: "Roboto', sans-serif",
  },
  breakpoints: {
    sm: "320px",
    lg: "990px",
  },
});

export default theme;