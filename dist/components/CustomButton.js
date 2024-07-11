"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const CustomButton = ({ children, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(react_1.Button, { colorScheme: "primary", ...props, children: children }));
};
exports.default = CustomButton;
