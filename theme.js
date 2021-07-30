import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      "html, body": {
        h: "100vh",
      },
    },
  },
  space: {
    main: "4.375rem",
    mainhalf: "2.1875rem",
  },
  colors: {
    // page: "#171923",
    page: "#999999",
  },
});

export default theme;
