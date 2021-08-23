const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      title: ["Istok Web", "ui-sans-serif", "system-ui"],
      main: ["Nunito Sans", "ui-serif", "Georgia"],
      second: ["Roboto", "ui-monospace", "SFMono-Regular"],
    },
    colors: {
      transparent: "transparent",
      currentColor: "currentColor",
      mainBg: colors.coolGray[800],
      secondBg: colors.coolGray[700],
      normalBg: colors.coolGray[200],
      white: colors.white,
      grayLight: colors.coolGray[500],
      whiteLight: colors.coolGray[400],
      black: colors.coolGray[800],
      main: colors.purple[700],
      mainDark: colors.purple[800],
      mainLight: colors.purple[500],
      warning: colors.yellow[700],
      carrot: colors.yellow[600],
      yellowLight: colors.yellow[200],
      neutral: colors.blue[700],
      neutralLight: colors.blue[500],
      danger: colors.red[700],
      dangerLight: colors.red[500],
      green: colors.green[700],
      greenLight: colors.green[500],
    },
    extend: {
      backgroundImage: (theme) => ({
        login_background:
          "url('https://images.unsplash.com/photo-1582515073490-39981397c445?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80')",
      }),
    },
  },
  variants: {
    extend: {
      textColor: ["hover"],
      backgroundColor: ["disabled", "hover"],
      textOpacity: ["hover"],
      opacity: ["disabled"],
      gridTemplateColumns: ["hover", "focus"],
    },
  },
  plugins: [],
};
