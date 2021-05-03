import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, ChakraProvider, Button, useDisclosure, } from '@chakra-ui/react';
const App = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [state, setState] = useState(0);
    return (_jsxs(ChakraProvider, { children: [_jsx(Button, Object.assign({ onClick: onOpen }, { children: "Open Modal" }), void 0),
            _jsxs(Button, Object.assign({ onClick: setState.bind(null, state + 1) }, { children: ["Click ", state] }), void 0),
            _jsxs(Modal, Object.assign({ isOpen: isOpen, onClose: onClose }, { children: [_jsx(ModalOverlay, {}, void 0),
                    _jsxs(ModalContent, { children: [_jsx(ModalHeader, { children: "Modal Title" }, void 0),
                            _jsx(ModalCloseButton, {}, void 0),
                            _jsx(ModalBody, { children: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis repellat libero odio sint officiis." }, void 0),
                            _jsxs(ModalFooter, { children: [_jsx(Button, Object.assign({ colorScheme: 'blue', mr: 3, onClick: onClose }, { children: "Close" }), void 0),
                                    _jsx(Button, Object.assign({ variant: 'ghost' }, { children: "Secondary Action" }), void 0)] }, void 0)] }, void 0)] }), void 0)] }, void 0));
};
export default App;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvYXBwL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLE9BQU8sQ0FBQTtBQUVoQyxPQUFPLEVBQ04sS0FBSyxFQUNMLFlBQVksRUFDWixZQUFZLEVBQ1osV0FBVyxFQUNYLFdBQVcsRUFDWCxTQUFTLEVBQ1QsZ0JBQWdCLEVBQ2hCLGNBQWMsRUFDZCxNQUFNLEVBQ04sYUFBYSxHQUNiLE1BQU0sa0JBQWtCLENBQUE7QUFFekIsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFO0lBQ2hCLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxHQUFHLGFBQWEsRUFBRSxDQUFBO0lBRW5ELE1BQU0sQ0FBQyxLQUFLLEVBQUUsUUFBUSxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFBO0lBRXJDLE9BQU8sQ0FDTixNQUFDLGNBQWMsZUFDZCxLQUFDLE1BQU0sa0JBQUMsT0FBTyxFQUFFLE1BQU0sd0NBQXFCO1lBQzVDLE1BQUMsTUFBTSxrQkFBQyxPQUFPLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxHQUFHLENBQUMsQ0FBQywyQkFDdkMsS0FBSyxhQUNKO1lBQ1QsTUFBQyxLQUFLLGtCQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8saUJBQ3RDLEtBQUMsWUFBWSxhQUFHO29CQUNoQixNQUFDLFlBQVksZUFDWixLQUFDLFdBQVcsc0NBQTBCOzRCQUN0QyxLQUFDLGdCQUFnQixhQUFHOzRCQUNwQixLQUFDLFNBQVMsOEhBR0U7NEJBRVosTUFBQyxXQUFXLGVBQ1gsS0FBQyxNQUFNLGtCQUFDLFdBQVcsRUFBQyxNQUFNLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxtQ0FFekM7b0NBQ1QsS0FBQyxNQUFNLGtCQUFDLE9BQU8sRUFBQyxPQUFPLDhDQUEwQixZQUNwQyxZQUNBLGFBQ1IsWUFDUSxDQUNqQixDQUFBO0FBQ0YsQ0FBQyxDQUFBO0FBRUQsZUFBZSxHQUFHLENBQUEifQ==