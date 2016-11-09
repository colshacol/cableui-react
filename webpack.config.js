const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: `./client/src/index.js`,
	output: {
		path: `./client/public/scripts`,
		filename: 'webpack.js'
	},

	resolve: {
		alias: {
		  $Stores: path.resolve('./client/src/App/stores'),
		  $Functions: path.resolve('./client/src/App/functions'),
			$Components: path.resolve('./client/src/App/components'),
			$Views: path.resolve('./client/src/App/views'),
			$Assets: path.resolve('./client/src/App/assets')
		}
	},

	module: {
		loaders: [
			// babel-loader
			{
	      test: /(\.js|\.jsx)$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['react', 'es2015'],
					plugins: ['transform-decorators-legacy', 'transform-class-properties']
	      }
			},

			// stylus-loader
			{
				test: /\.styl$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},

			// svg-loader
			{
        test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
      }
		]
	}
}
