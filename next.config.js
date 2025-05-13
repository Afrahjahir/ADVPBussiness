/* eslint-disable */

/**
 * @type import("@mui/material").ThemeOptions;
 */
const defaultThemeOptions = {
  palette: {
    primary: { main: "#0A4D68" },
    secondary: { main: "#EB455F" }
  }
};

module.exports = {
  images: { unoptimized: true },
  publicRuntimeConfig: {
    defaultThemeOptions: defaultThemeOptions
  }
};
