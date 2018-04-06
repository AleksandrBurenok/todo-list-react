const webpackConfig = require('./config/webpack.dev');

module.exports = {
  ignore: [
    '**/__tests__/**',
    '**/environments/**',
    '**/*.test.{js,jsx}',
  ],
  webpackConfig,
};