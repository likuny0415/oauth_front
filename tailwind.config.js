module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inknut: "'Inknut Antiqua', serif",
        alegreya: "'Alegreya Sans', sans-serif",
        opensans: "'Open Sans', sans-serif",
        
      },
      width: {
        "px-400": "400px"
      },
      animation: {
        blob: "blob 7s infinite",
        todo: "toastProgress 0.5s",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "tranlate(0px, 0px) scale(1)",
          },
        },
        toastProgress: {
          "0%": {
            backgroundSize: "0% 100%",
          },
          "100%": {
            backgroundSize: "100% 100%",
          },
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
