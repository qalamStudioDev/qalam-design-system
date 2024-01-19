import { create } from "@storybook/theming";

export default create({
  base: "light",
  // Typography
  fontBase: '"Montserrat", sans-serif',
  fontCode: "sans-serif",

  brandTitle: "Qalam Design System",
  brandUrl: "https://qalam.com",
  brandTarget: "_self",

  //
  colorPrimary: "#b75566",
  colorSecondary: "#585C6D",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#585C6D",
  appBorderRadius: 4,

  // Text colors
  textColor: "#000000",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#9E9E9E",
  barSelectedColor: "#585C6D",
  barBg: "#ffffff",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#000000",
  inputTextColor: "#000000",
  inputBorderRadius: 8,
});
