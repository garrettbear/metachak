"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importDefault(require("react"));
const client_1 = __importDefault(require("react-dom/client"));
const App_1 = __importDefault(require("./App"));
const react_2 = require("@chakra-ui/react");
const theme_1 = __importDefault(require("./theme"));
require("./index.css");
client_1.default.createRoot(document.getElementById("root")).render((0, jsx_runtime_1.jsx)(react_1.default.StrictMode, { children: (0, jsx_runtime_1.jsx)(react_2.ChakraProvider, { theme: theme_1.default, children: (0, jsx_runtime_1.jsx)(App_1.default, {}) }) }));
