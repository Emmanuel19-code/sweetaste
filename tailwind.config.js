/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
        roboto: ["Roboto"],
        inter:['Inter']
      },
      fontSize: {
        xxs: '10px',
      },
    },
  },
  plugins: [],
};
