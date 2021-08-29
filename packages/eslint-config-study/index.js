module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    },
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'airbnb',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    // "prettier/@typescript-eslint"
  ],
  rules: {
    'no-console': ['error', { allow: ["error"] }],
    'eqeqeq': ['error', 'always'],
    'no-use-before-define': 'off', // import 하고 사용하지 않는 경우를 허용합니다.

    '@typescript-eslint/explicit-module-boundary-types': 'off', // return type을 명시하지 않아도 함수를 만들 수 있도록 합니다.

    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }], // react 컴포넌트를 갖는 파일의 확장자를 설정합니다.

    // import/extensions와 import/no-unresolved는 .tsx 파일을 확장자 없이 import 하려고 할 때 에러를 발생시킵니다.
    'import/extensions': ['error', 'never'],
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
  }
};
