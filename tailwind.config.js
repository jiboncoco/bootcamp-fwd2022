module.exports = {
  content: [
    'index.html',
    './src/**/*.{html,js}'
  ],
  theme: {
    fontFamily: {
      body: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
