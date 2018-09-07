const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const weblog = require('webpack-log');
const log = weblog({
  name: 'wds'
}) // webpack-dev-server

log.info(path.resolve(__dirname, 'dist/index.html'));

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[chunkHash].js'
  },
  mode: 'production',
  module: {
    rules: [{
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
