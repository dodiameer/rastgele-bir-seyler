const typography = require('@tailwindcss/typography');
const colors = require('tailwindcss/colors');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				primary: { ...colors.blue, text: colors.white, DEFAULT: colors.blue[500] },
				secondary: { ...colors.red, text: colors.white, DEFAULT: colors.red[500] },
			},
		},
		container: {
			padding: '1.5rem',
			center: true,
		},
	},

	plugins: [typography],
};

module.exports = config;
