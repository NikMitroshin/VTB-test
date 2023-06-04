module.exports = {
  root: true,
  plugins: ['prettier'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    '@eclab/eslint-config',
    '@eclab/eslint-config/react',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'prettier/prettier': 'error',
    // A temporary hack related to IDE not resolving correct package.json
    'import/no-extraneous-dependencies': 'off',
    // A temporary hack to allow importing types
    'import/no-cycle': 'off',
    'no-nested-ternary': 'warn',
    'global-require': 'warn',
    'react/no-unstable-nested-components': 'warn',
    'react/jsx-no-useless-fragment': 'warn',
  },
  settings: {
    'import/resolver': {
      typescript: {},
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  ignorePatterns: [
    'shim.js',
    'src/services/coins/**/*.js',
    '.eslintrc.js',
    '.prettierrc.js',
    'metro.config.js',
    'jest.config.js',
    'lint-staged.config.js',
    'babel.config.js',
    '*.json',
    'scripts/*.js',
    'dotenv-util.config.js',
  ],
};
