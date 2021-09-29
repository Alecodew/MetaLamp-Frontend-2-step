const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  entry: "./src/app.js",
  output: {
	  filename: "bundle.js",
	  path: path.resolve(__dirname, "dist")
   },

plugins: [
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug'
    }),
    ],

module: {
    rules: [
      { test: /\.pug$/, use: ['pug-loader',]},
      {test: /\.s[ac]ss$/, use: [ 'style-loader', 'css-loader', 'sass-loader' ]},
      
    ]
  },
   
};


