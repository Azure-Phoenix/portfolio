/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      filter: {   // defaults to {}
        'none': 'none',
        'blur': 'blur(20px)',
        'brightness': 'brightness(0.5)',
        'contrast': 'contrast(2)',
        'drop-shadow': 'drop-shadow(2px 2px 2px red)', // default to '0 0 black'
        'grayscale': 'grayscale(1)',
        'hue-rotate': 'hue-rotate(15deg)',
        'invert': 'invert(1)',
        'saturate': 'saturate(2)',
        'sepia': 'sepia(1)',
        'drop-shadow-glow': 'drop-shadow(0 0 10px yellow)' // add custom filters
      },
      backgroundImage: {
        radial: "url('/public/gradient.webp')",
      },
    },
  },
  variants: {
    extend: {
      filter: ['responsive']  // defaults to ['responsive']
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
    require("@tailwindcss/line-clamp"),
    require('tailwindcss-filters')
  ],
};
