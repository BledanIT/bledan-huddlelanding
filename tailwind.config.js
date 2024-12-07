/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js}', './index.html'],
  theme: {
    extend: {
      colors: {
        'main': 'hsl(257, 40%, 49%)',
        'secondary': 'hsl(300, 69%, 71%)',
      },
      fontFamily: {
        'poppins': [
          '"Poppins", serif'
          ],
        'opensans': [
          '"Open Sans", sans-serif'
          ],
      },
      backgroundImage: {
        'desktop': "url('./src/images/bg-desktop.svg')",
        'mobile': "url('./src/images/bg-mobile.svg')",
        'mockups': "url('./src/images/illustration-mockups.svg')",
      },
      boxShadow: {
        'half': '0 15px 20px -10px rgba(0, 0, 0, 0.3)',
        'active': '0 5px 15px 0px rgba(0, 0, 0, 0.5)'
      }
    },
  },
  plugins: [],
}

