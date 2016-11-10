const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
	// devtool: 'source-source-map',
  debug: true,

	entry: `./client/src/index.js`,
	output: {
		path: `./client/public/scripts`,
		filename: 'webpack.js'
	},

	plugins: [
		 new ExtractTextPlugin('app.css', {
				 allChunks: true
		 })
	 ],

	resolve: {
		alias: {
		  stores: path.resolve('./client/src/App/stores'),
		  fns: path.resolve('./client/src/App/functions'),
			comps: path.resolve('./client/src/App/components'),
			views: path.resolve('./client/src/App/views'),
			assets: path.resolve('./client/src/App/assets')
		}
	},

	// turn on sourcemaps
	devtool: 'source-map',

	module: {
		loaders: [
			// babel-loader
			{
	      test: /(\.js|\.jsx)$/,
	      exclude: /(node_modules|bower_components)/,
	      loader: 'babel-loader',
	      query: {
	        presets: ['react', 'es2015'],
					plugins: [
            'react-html-attrs',
						["typecheck", {
							"disable": {
								"production": true
							}
						}],
						'transform-decorators-legacy',
						'transform-class-properties',
					]
	      }
			},

			// { // css-loader
			// 	test: /\.(styl|css)$/,
			// 	loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus')
			// },

			// stylus-loader
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader!stylus-loader'
			},

			// svg-loader
			{
        test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
      }
		]


			// { // babel-loader
	    //   test: /(\.js|\.jsx)$/,
	    //   exclude: /(node_modules|bower_components)/,
	    //   loader: 'babel-loader',
	    //   query: {
	    //     presets: ['react', 'es2015'],
			// 		plugins: [
			// 			// 'syntax-flow',
			// 			'transform-decorators-legacy',
			// 			'transform-class-properties',
			// 			// 'transform-flow-strip-types'
			// 		]
	    //   }
			// },

			// { // typescript-loader
			// 	test: /\.ts$/,
			// 	loader: 'ts-loader',
			// },



			// { // stylus-loader
			// 	test: /\.styl$/,
			// 	loaders: 'style-loader!css-loader!stylus-loader'
			// },


			// { // svg-loader
      //   test: /\.svg$/, loader: 'babel?presets[]=es2015,presets[]=react!svg-react'
      // }
	}
}
