const transformConfig = require('preact-cli/lib/lib/webpack/transform-config')
const path = require('path')

const webpackFinal = async config => {
	await transformConfig(
		{ config: path.resolve(__dirname, '../config/preact.config.js') },
		config
	)
	return config
}
const babel = async options => ({
	...options,
	presets: ['preact-cli/babel'],
})

module.exports = {
	stories: ['../src/**/*.story.tsx'],
	addons: ['@storybook/addon-essentials'],
	// refs: {'@chakra-ui/react': { disable: true }},
	babel,
	webpackFinal,
}
