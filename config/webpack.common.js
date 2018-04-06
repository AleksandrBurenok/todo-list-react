const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: 'styles/[name].css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  entry: {
    index: './src/components/environments/index.jsx',
  },

  output: {
    filename: 'scripts/[name].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.scss$/,
      use: extractSass.extract({
        fallback: 'style-loader',
        use: [{
          loader: 'css-loader',
          options: {
            sourceMap: true,
          },
        }, {
          loader: 'sass-loader',
          options: {
            sourceMap: true,
          },
        },
          'postcss-loader',
        ],
      }),
    }],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [path.resolve(__dirname, '../src'), 'node_modules'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Todo List',
      filename: 'index.html',
      chunks: ['index'],
      template: './src/assets/templates/index.html',
      inject: true,
    }),
    extractSass,
  ],
};
