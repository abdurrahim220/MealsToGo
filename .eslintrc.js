module.exports = {
  extends: [
    '@react-native-community',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-native/all', 
    'prettier',
  ],
  env: {
    'react-native/react-native': true,
    jest: true,
  },
  parser: '@babel/eslint-parser', 
  parserOptions: {
    requireConfigFile: false, 
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react', 'react-native', 'prettier'],
  rules: {
    'prettier/prettier': 'error', 
    'react/prop-types': 'off', 
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
