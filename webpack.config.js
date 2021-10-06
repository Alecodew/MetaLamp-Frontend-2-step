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
      {test: /\.pug$/i, use: ['pug-loader',]},
      {test: /\.s[ac]ss$/i, use: [ 'style-loader', 'css-loader','sass-loader' ]},
      {test: /\.(woff(2)?|eot|ttf|otf|svg)$/,type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]',}
      },
    ]
  },


};

