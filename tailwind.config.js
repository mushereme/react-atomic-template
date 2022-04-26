const colors = require("tailwindcss/colors");
module.exports = {
  // mode: "jit",
  content: [
    "./pages/**/*.{html,js,ts,tsx}",
    "./components/**/*.{html,js,ts,tsx}",
    "./public/cachedata/**/*.json",
  ],
  container: {
    center: true,
  },
  darkMode: "class",
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1620px",
        "3xl": "1460px",
      },
      gridAutoRows: {
        "2fr": "minmax(0, 2fr)",
      },
      fontFamily: {
        sans: ["Roboto", "sans-serif"],
        serif: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        robotoslab: ["Roboto Slab", "serif"],
        robotocondensed: ["Roboto Condensed", "sans-serif"],
      },
      boxShadow: {
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px",
        citizen: "0px 20px 27px 0px rgba(0, 0, 0, 0.05)",
      },
      scale: {
        120: "1.2",
      },
      lineClamp: {
        1: "1",
        2: "2",
        3: "3",
        7: "7",
        8: "8",
        9: "9",
        10: "10",
      },
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-down": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(10px)",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-out",
        "fade-out-down": "fade-out-down 0.5s ease-out",
        "fade-in-up": "fade-in-up 0.5s ease-out",
        "fade-out-up": "fade-out-up 0.5s ease-out",
      },
      spacing: {
        112: "28rem",
        128: "32rem",
        144: "36rem",
        156: "40rem",
      },
    },
    aspectRatio: {
      none: 0,
      square: [1, 1], // or 1 / 1, or simply 1
      "16/9": [16, 9], // or 16 / 9
      "4/3": [4, 3], // or 4 / 3
      "21/9": [21, 9], // or 21 / 9
      "9/16": [9, 16], // or 16 / 9
      "3/4": [3, 4], // or 4 / 3
      "3/5": [3, 5],
      "9/21": [9, 21],
      "6/9": [6, 9],
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },
    fontSize: {
      xss: ".5rem",
      xsss: ".3rem",
      xs: ".75rem",
      sm: ".875rem",
      tiny: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    screens: {
      xs: "340px",
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1300px",
    },
    borderWidth: {
      DEFAULT: "1px",
      0: "0",
      2: "2px",
      3: "3px",
      4: "4px",
      6: "6px",
    },
    // colors: {
    // 	transparent: "transparent",
    // 	current: "currentColor",
    // 	black: colors.black,
    // 	white: colors.white,
    // 	gray: colors.gray,
    // 	emerald: colors.emerald,
    // 	indigo: colors.indigo,
    // 	yellow: colors.yellow,
    // 	lime: colors.lime,
    // },
  },
  variants: {
    lineClamp: ["responsive", "hover"],
    extend: {},
    aspectRatio: ["responsive"], // defaults to ['responsive']
  },

  plugins: [
    require("autoprefixer"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar"),
  ],
};
