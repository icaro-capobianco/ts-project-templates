import React from 'react'

import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	ChakraProvider,
	Button,
	useDisclosure,
} from '@chakra-ui/react'

const App = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<ChakraProvider>
			<Button onClick={onOpen}>Open Modal</Button>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Nobis repellat libero odio sint officiis.
					</ModalBody>

					<ModalFooter>
						<Button colorScheme='blue' mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant='ghost'>Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</ChakraProvider>
	)
}

export default App
