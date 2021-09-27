const path = require('path');
/* const fs = require('fs') */
const miniCss = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const loader = require('sass-loader');

/* const PATHS = {
  src: path.join(__dirname, '/src'),
  dist: path.join(__dirname, '/dist'),
};
const PAGES_DIR = `${PATHS.src}/pug/pages/`
const PAGES = fs.readdirSync(PAGES_DIR).filter(fileName => fileName.endsWith('.pug'));

module.exports = {
  
  externals: {
    paths: PATHS
  },
  entry: {
    app: PATHS.src,
    
  },
  output: {
    filename: `${PATHS.assets}js/[name].[hash].js`,
    path: PATHS.dist,
    publicPath: '/'
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /node_modules/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  },
  plugins:[
    ...PAGES.map(page => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}`,
      filename: `./${page.replace(/\.pug/,'.html')}`
    })),
    new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/pug/pages/index.pug`,
      filename: 'index.html',
      inject: true
    })
  ],
};
 */

module.exports = {
  entry: './src/app.js',
  output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'bundle.js'
  }
};
module.exports = {
   entry: './src/app.js',
   output: {
	  filename: 'bundle.js',
	  path: path.resolve(__dirname, 'dist')
   },
   module: {
	  rules: [{
		 test:/\.s[ac]ss$/i,
		 use: [
			miniCss.loader,
			'css-loader',
			'sass-loader',
		 ]
	  },
   ]},
   plugins: [
	  new miniCss({
		 filename: 'style.css',
	  }),
    new HtmlWebpackPlugin({
      template: './src/pug/pages/index.pug'
    }), 
   ],
   module: {
    rules: [
      { 
        test: /\.pug$/,
        use: ['pug-loader']
      },
    ]
  }
   
};

