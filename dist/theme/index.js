"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/theme/index.ts
const react_1 = require("@chakra-ui/react");
const design_tokens_1 = require("@metamask/design-tokens");
const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
};
const customTheme = (0, react_1.extendTheme)({
    config,
    colors: {
        primary: {
            100: "#E3F2F9",
            200: "#C5E4F3",
            300: "#A2D4EC",
            400: "#7AC1E4",
            500: design_tokens_1.lightTheme.colors.primary.default,
            600: design_tokens_1.lightTheme.colors.primary.defaultHover,
            700: "#007AB8",
            800: "#006BA1",
            900: "#005885",
        },
    },
});
exports.default = customTheme;
