/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {

      
    },
    colors: {
      ts: '#007ACC',
      js: '#F7DF1E',
      sass: '#CC6699',
      react: '#61DAFB',
      nodejs: '#339933',
      svelte: '#FF3E00',
      tailwind: '#38B2AC',
      fastify: '#202020',
      sqlite: '#003B57',
      mongodb: '#47A248',
      darkgrey: '#484848',
      lightgrey: '##F7F2F6',
      black: '#000000',
      white: '#FFFFFF',
      
      
    },
    screens: {

      'xs': '475px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '3xl': '1920px',

      '4xl': '2560px',


      'max2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'maxxl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'maxlg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'maxmd': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'maxsm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }

      'maxxs': {'max': '474px'},
    },
    extend: {}
  },
   plugins: [require("daisyui")],
};