
/*
  This file will be the future webpack.config.js once I
  have time to migrate to Webpack 2.
*/

const webpack = require('webpack')
const path = require('path')

module.exports = {
	entry: {
		// optional: array of entry paths
		app: `./client/src/index.js`
		// optional: multiple k/v pairs, multiple bundles
	},

	output: {
		path: `./client/public/scripts`,
		filename: '[name].js'
	},

	devtool: "source-map",

	resolve: {
		extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"],
		alias: {
		  stores: path.resolve('./client/src/App/stores'),
		  fns: path.resolve('./client/src/App/functions'),
			comps: path.resolve('./client/src/App/components'),
			views: path.resolve('./client/src/App/views'),
			assets: path.resolve('./client/src/App/assets')
		}
	},

	module: {
		rules: [
			{ // babel-loader
	      test: /(\.js|\.jsx)$/,
				use: [{
					loader: 'babel-loader',
					exclude: /(node_modules|bower_components)/,
					options: {
		        presets: ['react', 'es2015', { "modules": false }],
						plugins: ['transform-decorators-legacy', 'transform-class-properties']
		      }
				}]
			},

			{ // typescript-loader
				test: /\.tsx?$/,
				use: [{
					loader: "ts-loader"
				}
			},

			{ // stylus-loader
				test: /\.styl$/,
				use: [{
					loader: 'style-loader!css-loader!stylus-loader'
				}]
			},

			{ // svg-loader
        test: /\.svg$/,
				use: [{
					loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
				}]
      }
		]
	}
}
