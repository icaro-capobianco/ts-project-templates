"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@chakra-ui/react");
var App = function () {
    var _a = react_2.useDisclosure(), isOpen = _a.isOpen, onOpen = _a.onOpen, onClose = _a.onClose;
    var _b = react_1.useState(0), state = _b[0], setState = _b[1];
    return (jsx_runtime_1.jsxs(react_2.ChakraProvider, { children: [jsx_runtime_1.jsx(react_2.Button, __assign({ onClick: onOpen }, { children: "Open Modal" }), void 0),
            jsx_runtime_1.jsxs(react_2.Button, __assign({ onClick: setState.bind(null, state + 1) }, { children: ["Click ", state] }), void 0),
            jsx_runtime_1.jsxs(react_2.Modal, __assign({ isOpen: isOpen, onClose: onClose }, { children: [jsx_runtime_1.jsx(react_2.ModalOverlay, {}, void 0),
                    jsx_runtime_1.jsxs(react_2.ModalContent, { children: [jsx_runtime_1.jsx(react_2.ModalHeader, { children: "Modal Title" }, void 0),
                            jsx_runtime_1.jsx(react_2.ModalCloseButton, {}, void 0),
                            jsx_runtime_1.jsx(react_2.ModalBody, { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis repellat libero odio sint officiis." }, void 0),
                            jsx_runtime_1.jsxs(react_2.ModalFooter, { children: [jsx_runtime_1.jsx(react_2.Button, __assign({ colorScheme: 'blue', mr: 3, onClick: onClose }, { children: "Close" }), void 0),
                                    jsx_runtime_1.jsx(react_2.Button, __assign({ variant: 'ghost' }, { children: "Secondary Action" }), void 0)] }, void 0)] }, void 0)] }), void 0)] }, void 0));
};
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFnQztBQUVoQywwQ0FXeUI7QUFFekIsSUFBTSxHQUFHLEdBQUc7SUFDTCxJQUFBLEtBQThCLHFCQUFhLEVBQUUsRUFBM0MsTUFBTSxZQUFBLEVBQUUsTUFBTSxZQUFBLEVBQUUsT0FBTyxhQUFvQixDQUFBO0lBRTdDLElBQUEsS0FBb0IsZ0JBQVEsQ0FBQyxDQUFDLENBQUMsRUFBOUIsS0FBSyxRQUFBLEVBQUUsUUFBUSxRQUFlLENBQUE7SUFFckMsT0FBTyxDQUNOLG1CQUFDLHNCQUFjLGVBQ2Qsa0JBQUMsY0FBTSxhQUFDLE9BQU8sRUFBRSxNQUFNLHdDQUFxQjtZQUM1QyxtQkFBQyxjQUFNLGFBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssR0FBRyxDQUFDLENBQUMsMkJBQ3ZDLEtBQUssYUFDSjtZQUNULG1CQUFDLGFBQUssYUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxPQUFPLGlCQUN0QyxrQkFBQyxvQkFBWSxhQUFHO29CQUNoQixtQkFBQyxvQkFBWSxlQUNaLGtCQUFDLG1CQUFXLHNDQUEwQjs0QkFDdEMsa0JBQUMsd0JBQWdCLGFBQUc7NEJBQ3BCLGtCQUFDLGlCQUFTLDhIQUdFOzRCQUVaLG1CQUFDLG1CQUFXLGVBQ1gsa0JBQUMsY0FBTSxhQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxtQ0FFekM7b0NBQ1Qsa0JBQUMsY0FBTSxhQUFDLE9BQU8sRUFBQyxPQUFPLDhDQUEwQixZQUNwQyxZQUNBLGFBQ1IsWUFDUSxDQUNqQixDQUFBO0FBQ0YsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsR0FBRyxDQUFBIn0=