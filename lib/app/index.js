"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const App = () => {
    const { isOpen, onOpen, onClose } = react_2.useDisclosure();
    const [state, setState] = react_1.useState(0);
    return (jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx(react_2.Button, Object.assign({ onClick: onOpen }, { children: "Open Modal" }), void 0),
            jsx_runtime_1.jsxs(react_2.Button, Object.assign({ onClick: setState.bind(null, state + 1) }, { children: ["Click ", state] }), void 0),
            jsx_runtime_1.jsxs(react_2.Modal, Object.assign({ isOpen: isOpen, onClose: onClose }, { children: [jsx_runtime_1.jsx(react_2.ModalOverlay, {}, void 0),
                    jsx_runtime_1.jsxs(react_2.ModalContent, { children: [jsx_runtime_1.jsx(react_2.ModalHeader, { children: "Modal Title" }, void 0),
                            jsx_runtime_1.jsx(react_2.ModalCloseButton, {}, void 0),
                            jsx_runtime_1.jsx(react_2.ModalBody, { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis repellat libero odio sint officiis." }, void 0),
                            jsx_runtime_1.jsxs(react_2.ModalFooter, { children: [jsx_runtime_1.jsx(react_2.Button, Object.assign({ colorScheme: 'blue', mr: 3, onClick: onClose }, { children: "Close" }), void 0),
                                    jsx_runtime_1.jsx(react_2.Button, Object.assign({ variant: 'ghost' }, { children: "Secondary Action" }), void 0)] }, void 0)] }, void 0)] }), void 0)] }, void 0));
};
exports.default = App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxpQ0FBZ0M7QUFFaEMsNENBVXlCO0FBRXpCLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRTtJQUNoQixNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsR0FBRyxxQkFBYSxFQUFFLENBQUE7SUFFbkQsTUFBTSxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsR0FBRyxnQkFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRXJDLE9BQU8sQ0FDTix3REFDQyxrQkFBQyxjQUFNLGtCQUFDLE9BQU8sRUFBRSxNQUFNLHdDQUFxQjtZQUM1QyxtQkFBQyxjQUFNLGtCQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEdBQUcsQ0FBQyxDQUFDLDJCQUN2QyxLQUFLLGFBQ0o7WUFDVCxtQkFBQyxhQUFLLGtCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8saUJBQ3RDLGtCQUFDLG9CQUFZLGFBQUc7b0JBQ2hCLG1CQUFDLG9CQUFZLGVBQ1osa0JBQUMsbUJBQVcsc0NBQTBCOzRCQUN0QyxrQkFBQyx3QkFBZ0IsYUFBRzs0QkFDcEIsa0JBQUMsaUJBQVMsOEhBR0U7NEJBRVosbUJBQUMsbUJBQVcsZUFDWCxrQkFBQyxjQUFNLGtCQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxtQ0FFekM7b0NBQ1Qsa0JBQUMsY0FBTSxrQkFBQyxPQUFPLEVBQUMsT0FBTyw4Q0FBMEIsWUFDcEMsWUFDQSxhQUNSLFlBQ04sQ0FDSCxDQUFBO0FBQ0YsQ0FBQyxDQUFBO0FBRUQsa0JBQWUsR0FBRyxDQUFBIn0=