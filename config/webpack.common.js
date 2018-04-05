const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },

  output: {
    filename: 'scripts/[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'React Todo List',
    template: './src/assets/templates/index.html',
    inject: false,
    bundleName: 'index.bundle.js'
  })],
};