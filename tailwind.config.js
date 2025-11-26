/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                whatsapp: {
                    DEFAULT: '#138c7e',
                    dark: '#0d6b5f',
                    darker: '#074c44',
                    header: '#065e55',
                },
                phone: '#eaeaea',
            },
            fontFamily: {
                sans: ['Poppins', 'Roboto', 'Open Sans', 'sans-serif'],
            },
            borderRadius: {
                'phone': '20px',
            },
        },
    },
    plugins: [],
}
