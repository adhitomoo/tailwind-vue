const colors = require('tailwindcss/colors');

module.exports = {
	purge: {
		mode: 'layers',
		content: ['./public/**/*.html', './src/**/*.vue'],
	},
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				emerald: colors.emerald,
				gray: colors.trueGray,
			},
		},
    fontFamily: {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Oswald'],
      'body': ['Poppins'],
     }
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
