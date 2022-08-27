module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'node': true,
    'jest': true
  },
  'extends': [
    'plugin:@typescript-eslint/recommended'
  ],
  'settings': {
    'react': {
      'version': 'detect'
    }
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    '@typescript-eslint'
  ],
  'rules': {
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-eval': 'error',
    'no-multi-spaces': 'error',
    'eol-last': ['error', 'always'],
    'no-dupe-keys': 'error',
    'no-irregular-whitespace': 'error',
    'camelcase': 'warn',
    'max-len': ['error', { code: 140, tabWidth: 2 }],
    'no-tabs': 'error',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-dangle': ['error', 'never'],
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    'prefer-const': 'error',
    'no-return-assign': 'off',
    'space-before-function-paren': ['error', { 'asyncArrow': 'always', 'named': 'never' }],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn'
  }
};
