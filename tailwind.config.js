module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        "hero-image":
          "url('https://j-vw.s3.eu-west-2.amazonaws.com/hero-image.jpg')",
        "404-image":
          "url('https://j-vw.s3.eu-west-2.amazonaws.com/404-image.jpg')",
        "launch-image":
          "url('https://j-vw.s3.eu-west-2.amazonaws.com/launch-image.jpg')",
      }),
      fontFamily: {
        mono: ["Space Mono", "monospace"],
        sans: ["Roboto"],
      },
      screens: {
        "max-2xl": { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        "max-xl": { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        "max-lg": { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        "max-md": { max: "767px" },
        // => @media (max-width: 767px) { ... }

        "max-sm": { max: "639px" },
        // => @media (max-width: 639px) { ... }
      },
      lineHeight: {
        12: "3rem",
      },
      colors: {
        gray: {
          DEFAULT: "#6D6D6D",
        },
      },

      height: {
        0.25: "0.0625rem",
        112: "28 rem",
        128: "32 rem",
        144: "36 rem",
        160: "40 rem",
        48: "48%",
      },

      minHeight: {
        12: "12rem",
      },

      width: {
        48: "48%",
        0.25: "0.0625rem",
      },

      backgroundColor: {
        card: "rgba(56, 56, 255, 0.1)",
        "card-hover": "rgba(56, 56, 255, 0.25)",
        news: "rgba(0, 0, 0, 0.4)",
        "news-hover": "rgba(0, 0, 0, 0.6)",
      },

      maxWidth: {
        "1/3": "33.333333%",
        "2/3": "66.6666667%",
        "1/2": "50%",
      },

      flex: {
        "1/3": "0 0 33.33333%",
        "2/3": "0 0 66.666667%",
        "1/2": "0 0 50%",
        48: "0 0 48%",
      },
    },
  },
  variants: {
    extend: {
      width: ["hover", "focus", "responsive", "group-hover", "group-focus"],
      outline: ["focus", "group-focus"],
    },
  },
  plugins: [],
}
