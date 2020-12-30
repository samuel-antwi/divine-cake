module.exports = {
  purge: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        title: ['Playfair Display'],
        barlow: ['Barlow'],
        mulish: ['Mulish'],
      },
    },
    container: {
      center: true,
      padding: '1.5rem',
    },
    screens: {
      xxs: '320px',
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
      form: '#de5931',
      chefs: '#4d292c',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
  important: true,
};
