module.exports = {
  purge: false,
  extract: {
    include: ['**/*.{jsx,tsx,css}'],
    exclude: ['node_modules', '.git', '.next'],
  },
  theme: {
    extend: {
      colors: {
        darkPrimary: '#2C2C38',
        dark: {
          text: '#fff',
          primary: '#2C2C38',
          secondary: '#21212D',
        },
        text: '#35495E',
        primary: '#fff',
        secondary: '#c7ced3',
      },
    },
  },
  plugins: [],
};
