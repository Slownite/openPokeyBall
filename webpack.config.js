const path = require('path');
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );
module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './public/js'),
  },
  plugins: [
    new HtmlWebPackPlugin()
 ]
};