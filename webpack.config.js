const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const RobotstxtPlugin = require("robotstxt-webpack-plugin");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const configs = require("./configs");

module.exports = {
	entry: path.resolve(__dirname, "src", "index.js"),
	output: {
		filename: "main.js",
		publicPath: "/",
		path: path.resolve(__dirname, "dist"),
		clean: true,
		environment: {
			arrowFunction: false,
		},
	},
	devServer: {
		static: path.join(__dirname, "dist"),
		open: true,
		hot: true,
	},
	plugins: [
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.join(__dirname, "src", "images"),
					to: path.join(__dirname, "dist", "images"),
				},
				{
					from: path.join(__dirname, "src", "extras", "clubs-lillymed"),
					to: path.join(__dirname, "dist", "clubs-lillymed"),
				},
			],
		}),
		new HtmlWebpackPlugin({
			filename: "index.html",
			template: path.resolve(__dirname, "src", "templates", "index.hbs"),
			data: configs.data,
		}),
		new RobotstxtPlugin({}),
		new SitemapPlugin({
			base: configs.data.seo.url,
			paths: ["/", "https://lillymed.com.br/"],
			options: {
				skipgzip: true,
			},
		}),
	],
	module: {
		rules: [
			{
				test: /\.(hbs|handlebars)$/,
				loader: "handlebars-loader",
			},
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
						plugins: ["@babel/plugin-transform-runtime"],
					},
				},
			},
			{
				test: /\.s[ac]ss$/i,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				loader: "file-loader",
				options: {
					outputPath: "images",
					esModule: false,
				},
			},
		],
	},
};
