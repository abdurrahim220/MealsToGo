https://chatgpt.com/share/671fb047-43ec-8013-8418-778fa01e78c9


``` npm install --save-dev eslint @react-native-community/eslint-config eslint-plugin-react eslint-plugin-react-native @babel/eslint-parser prettier eslint-plugin-prettier eslint-config-prettier ```


```module.exports = {
  extends: [
    '@react-native-community', // Community config for React Native projects
    'eslint:recommended', 
    'plugin:react/recommended', 
    'plugin:react-native/all', // Adds React Native-specific rules
    'prettier' // Integrates Prettier with ESLint
  ],
  env: {
    'react-native/react-native': true,
    jest: true,
  },
  parser: '@babel/eslint-parser', // Latest parser for ES6+ syntax
  parserOptions: {
    requireConfigFile: false, // Allows JSX without a Babel config
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'prettier/prettier': 'error', // Displays Prettier issues as ESLint errors
    'react/prop-types': 'off', // Disable prop-types if you’re using TypeScript or not using prop-types
    'react-native/no-inline-styles': 'warn',
    'react-native/no-unused-styles': 'warn',
    'react-native/split-platform-components': 'warn',
    'react-native/no-color-literals': 'off',
    'no-unused-vars': ['warn'],
    'no-console': 'warn',
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2, { SwitchCase: 1 }],
  },
};
```