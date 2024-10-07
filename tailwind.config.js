/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'red-quicky': '#EF1D28',
      },
      screens: {
        mobile: '430px',
        sm530: '530px',
        ssm: '588px',
        sm650: '650px',
        md800: '800px',
        md944: '944px',
        mdl: '1000px',
        md1017: '1017px',
        mdll: '1144px',
        wide: '1400px',
      },
    },
  },
  plugins: [],
};
