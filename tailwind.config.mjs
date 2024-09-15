/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                'primary': '#FF2E63',
                'secondary': '#08D906',
                'dark': '#252A54',
                'light': '#EAEAEA',
            }
        },
        fontFamily: {
            'sans': ['Montserrat', 'ui-sans-serif', 'system-ui']
        }
	},
	plugins: [],
}
