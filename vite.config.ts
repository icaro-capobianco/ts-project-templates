import { defineConfig } from 'vite'
import { getAliases } from 'vite-aliases'
import react from 'vite-preset-react'

const aliases = getAliases()

export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: aliases,
	},
})
