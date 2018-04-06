const path = require('path');
const webpackConfig = require('./config/webpack.dev');

module.exports = {
  ignore: [
    '**/__tests__/**',
    '**/environments/**',
    '**/*.test.{js,jsx}',
  ],
  webpackConfig,
  require: [
    path.join(__dirname, 'src/assets/styles/global.scss'),
  ],
};