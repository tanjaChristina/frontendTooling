import { defineConfig } from "eslint/config";
import globals from "globals";
import react from "eslint-plugin-react";

export default defineConfig([
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // ... any rules you want
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
      'no-unused-vars':'error',
      'no-undef': 'warn'
     },
    // ... others are omitted for brevity
  }
]);
