const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const weblog = require('webpack-log');
const log = weblog({ name: 'wds' }) // webpack-dev-server
 
log.info(path.resolve(__dirname, 'dist/index.html'));

module.exports = {
  entry: {
    'main':'./src/assets/js/index.js',
    'styles':'./src/assets/styles/index.scss'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist/assets')
  },
  devServer: {
     contentBase: path.resolve(__dirname, 'dist'),
     publicPath: '/assets/'
   },
   module: {
     rules: [
       {
         test: /\.scss$/,
         use: [
           'style-loader',
           'css-loader',
           'sass-loader'
         ]
       }
     ]
   },
   plugins:[
     new HtmlWebpackPlugin({
       template : path.resolve(__dirname, 'src/index.html'),
       hash: true,
       filename: path.resolve(__dirname, 'dist/index.html')
     }),
     new CleanWebpackPlugin(['dist'])
   ]
};