import { render } from 'react-dom'
import App from './app'
import { ChakraProvider } from '@chakra-ui/react'
const root = document.getElementById('root')

if (root)
	render(
		<ChakraProvider>
			<App />
		</ChakraProvider>,
		root
	)
