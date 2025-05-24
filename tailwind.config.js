/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#54595F',
      },
      screens: {
        sm: "320px",
        md: "360px",
        xl: "1024px"
      },
      fontFamily: {
        roboto: ['Roboto'],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        'smooth-bounce': {
          '0%, 100%': {
            transform: 'translateY(0)',
            easing: 'cubic-bezier(0.65, 0, 0.35, 1)',
          },
          '50%': {
            transform: 'translateY(-5px)',
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in',
        fadeOut: 'fadeOut 1s ease-out ',
        'bounce-first': 'smooth-bounce 1s cubic-bezier(0.65, 0, 0.35, 1) infinite',
        'bounce-sec': 'smooth-bounce 1s cubic-bezier(0.65, 0, 0.35, 1) 0.15s infinite',
        'bounce-thrd': 'smooth-bounce 1s cubic-bezier(0.65, 0, 0.35, 1) 0.3s infinite',
      },
    },
  },
  plugins: [],
}
