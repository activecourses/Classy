/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                text: '#090b0e', // rgb(9, 11, 14)
                background: '#f8f9fa', // rgb(248, 249, 250)
                primary: '#6590ca', // rgb(101, 144, 202)secondary: '#c4acd0', // rgb(196, 172, 208)
                accent: '#b88eb5', // rgb(184, 142, 181)
            },
            fontSize: {
                sm: '0.750rem', // 12px
                base: '1rem', // 16px
                xl: '1.333rem', // 21.28px
                '2xl': '1.777rem', // 28.48px
                '3xl': '2.369rem', // 37.92px
                '4xl': '3.158rem', // 50.56px
                '5xl': '4.210rem', // 67.36px
            },
            fontFamily: {
                heading: ['Noto Sans JP', 'sans-serif'],
                body: ['Noto Sans JP', 'sans-serif'],
            },
            fontWeight: {
                normal: '400',
                bold: '700',
            },
        },
    },
    plugins: [],
}

