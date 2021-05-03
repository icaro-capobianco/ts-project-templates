const path = require('path')

const stories = [
	'../src/**/*.stories.mdx',
	'../src/**/*.stories.@(js|jsx|ts|tsx)',
	'../src/**/story.tsx',
]
const addons = ['@storybook/addon-essentials']

module.exports = {
	stories,
	addons,
	refs: { '@chakra-ui/react': { disable: true } },
	babel,
	webpackFinal,
}
