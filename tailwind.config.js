/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'neomorphism': '1px 1px 0px #d9d9d9, 1px 1px 10px #ffffff',
      }
    },
  },
  plugins: [],
}

