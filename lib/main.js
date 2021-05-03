"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_dom_1 = require("react-dom");
const app_1 = __importDefault(require("./app"));
const react_1 = require("@chakra-ui/react");
const root = document.getElementById('root');
if (root)
    react_dom_1.render(jsx_runtime_1.jsx(react_1.ChakraProvider, { children: jsx_runtime_1.jsx(app_1.default, {}, void 0) }, void 0), root);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9tYWluLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSx5Q0FBa0M7QUFDbEMsZ0RBQXVCO0FBQ3ZCLDRDQUFpRDtBQUNqRCxNQUFNLElBQUksR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFBO0FBRTVDLElBQUksSUFBSTtJQUNQLGtCQUFNLENBQ0wsa0JBQUMsc0JBQWMsY0FDZCxrQkFBQyxhQUFHLGFBQUcsV0FDUyxFQUNqQixJQUFJLENBQ0osQ0FBQSJ9