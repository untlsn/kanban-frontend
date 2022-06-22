module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        darkPrimaryMain: '#2C2C38',
        dark: {
          text: '#fff',
          primary: {
            main: '#2C2C38'
          }
        },
        text: '#35495E',
        primary: {
          main: '#c7ced3',
        }
      },
    },
  },
  plugins: [],
};
