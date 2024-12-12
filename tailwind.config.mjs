/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'color-1': '#141415',
				'color-2': '#2E2E2E',
				'color-3': '#BABDBE',
				'color-4': '#D9D9D9',
				'color-5': '#E8E8E8',
			},
			fontFamily: {
        electrolize: ['Electrolize', 'sans-serif'],
				robotomono:  ['Roboto Mono', 'sans-serif']
      },
		},
	},
	plugins: [],
}
