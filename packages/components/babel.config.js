module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-react',
      {
        // ReferenceError: React is not defined 방지
        runtime: 'automatic'
      }
    ],
    '@babel/preset-typescript'
  ]
};
