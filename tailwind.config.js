/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  darkMode: 'class',
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
    },
    extend: {
      colors: {
        'primary-light': '#F7F8FC',
        'secondary-light': '#FFFFFF',
        'accent-light': '#f6f7f8',

        'primary-dark': '#3e3e42',
        'secondary-dark': '#889',
        'accent-dark': '#00AEAE'
      }
    },
  },
  plugins: [],
}

