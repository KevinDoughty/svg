var webpack = require("webpack");
var path = require("path");

module.exports = [
	{
		entry: "./source/index.js",
		output: {
			path: __dirname,
			filename: "bundle.js"
		},
		module: {
			rules: [
				{
					test: /\.js?$/,
					loader: "babel-loader",
					exclude: /node_modules/,
					options: { presets: [
						["env", { modules: false }]
					]}
				}
			]
		}
	}
];
