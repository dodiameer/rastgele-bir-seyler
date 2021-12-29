import { resolve } from 'path';
const config = {
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool',
	},

	remarkPlugins: [],
	rehypePlugins: [],
	layout: resolve('src/lib/MdLayout.svelte'),
};

export default config;
