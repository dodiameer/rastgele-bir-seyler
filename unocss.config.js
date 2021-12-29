import { defineConfig, presetIcons, presetUno } from 'unocss';
import { presetTypography } from 'unocss-preset-typography';

export default defineConfig({
	presets: [
		presetUno(),
		presetIcons({
			extraProperties: {
				display: 'inline-block',
				'vertical-align': 'middle',
			},
		}),
		presetTypography(),
	],
	shortcuts: [
		{
			'prose-primary': '!text-black prose-blue',
			'prose-secondary': '!text-black prose-red',
		},
		// TODO: Make below shortcuts work only on colorable utilities
		// `text-primary`, `border-primary-800`, etc.
		[
			/^(.*)-primary(\-(.*))?$/,
			([_, selector, __, shade]) => {
				if (shade === 'text') return `${selector}-white`;
				return shade ? `${selector}-blue-${shade}` : `${selector}-blue-500`;
			},
		],
		// `text-secondary`, `border-secondary-800`, etc.
		[
			/^(.*)-secondary(\-(.*))?$/,
			([_, selector, __, shade]) => {
				if (shade === 'text') return `${selector}-white`;
				return shade ? `${selector}-red-${shade}` : `${selector}-red-500`;
			},
		],
		{
			c: 'container mx-auto px-4 py-2',
			debug: 'outline outline-red',
			'no-list': 'list-none p-0',
		},
	],
});
