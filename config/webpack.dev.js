const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: commonConfig.output.path,
    compress: true,
    historyApiFallback: true,
    host: '0.0.0.0',
    hot: true,
    port: 9000,
  },
  mode: 'development',
});