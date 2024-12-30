import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,jsx}"], // Match JS/JSX files
  languageOptions: {
    globals: globals.browser, // Set browser globals (window, document, etc.)
  },
  plugins: {
    react: pluginReact, // Add the react plugin
  },
  extends: [
    pluginJs.configs.recommended, // Recommended JS rules
    pluginReact.configs.flat.recommended, // Recommended React rules
  ],
  rules: {
    "react/react-in-jsx-scope": "off", // Optional for React 17+ (not needed)
  },
};
