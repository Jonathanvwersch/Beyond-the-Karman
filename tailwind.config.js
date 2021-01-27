module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
         'hero-image': "url('https://j-vw.s3.eu-west-2.amazonaws.com/hero-image.jpg')",
         '404-image': "url('https://j-vw.s3.eu-west-2.amazonaws.com/404-image.jpg')",
         'launch-image': "url('https://j-vw.s3.eu-west-2.amazonaws.com/launch-image.jpg')",
        }),
       fontFamily: {
        mono: ["Space Mono", "monospace"],
        sans: ["Space Grotesk"]
      },
      screens: {
        "max-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        'max-xl': { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        'max-lg': { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        'max-md': { max: "767px" },
        // => @media (max-width: 767px) { ... }

        'max-sm': { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      lineHeight: {
         '12': '3rem',
      },
      colors: {
        gray: {
          DEFAULT:'#6D6D6D',
        }
      }
        
    },
  },
  variants: {
    extend: {
      width: ["hover", "focus", "responsive", "group-hover"],

    },
  },
  plugins: [],
}
