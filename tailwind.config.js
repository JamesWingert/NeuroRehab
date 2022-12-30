module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        wcyan: '#107E8E',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        sans: ['Sora'],
        nexa: ['NexaDemo-Bold'],
        roboto: ['Roboto Slab', 'serif'],
        madi: ['cursive'],
        oxygen: ['Oxygen', 'sans-serif'],
        equinox: ['EquinoxRegular', 'serif'],
        work: ['Work Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('tailwindcss-textshadow'),
  ],
};
