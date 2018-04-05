const path = require('path');

module.exports = {
  entry: {
    index: './src/index.jsx',
  },

  output: {
    filename: '[name].bundle.js',
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
};