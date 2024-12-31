
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}", // Update with your file paths
    "./public/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mouse: ['"Mouse Memoirs"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
