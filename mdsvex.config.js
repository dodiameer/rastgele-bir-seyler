import { resolve } from 'path';
/**
 * @type {Parameters<typeof import("mdsvex").mdsvex>[0]}
 */
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
