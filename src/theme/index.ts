// src/theme/index.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const customTheme = extendTheme({
  config,
  colors: {
    primary: {
      100: "#E3F2F9",
      200: "#C5E4F3",
      300: "#A2D4EC",
      400: "#7AC1E4",
      500: "#47A9DA",
      600: "#0088CC",
      700: "#007AB8",
      800: "#006BA1",
      900: "#005885",
    },
  },
});

export default customTheme;
