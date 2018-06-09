const parseArr = require("./helpers").parseArr;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let babelLoader = () => ({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "babel-loader"
    }
  ]
});

let postCssLoader = () => ({
  loader: "postcss-loader",
  options: {
    plugins: () => {
      return [
        require("autoprefixer")({
          browsers: "> 5%"
        })
      ];
    }
  }
});

let sassLoader = () => "sass-loader"; // Has dependancy on node-sass.
let cssLoader = () => "css-loader?url=false"; //The css-loader interprets @import and url() like import/require() and will resolve them
let styleLoader = () => "style-loader"; // Adds CSS to the DOM by injecting a <style> tag in (compiled)index file.

let MiniCssExtractPluginLoader = () => MiniCssExtractPlugin.loader; // This plugin extract CSS into separate files.

let urlLoader = () => ({
  test: /\.(png|jpg|gif|svg)$/,
  exclude: /node_modules/,
  use: [
    {
      loader: "url-loader",
      options: {
        name: "[name].[ext]",
        outputPath: "images/",
        limit: 5000
      }
    }
  ]
});

let extractCssPluginLoader = isProd => ({
  test: /\.s?css$/,
  use: parseArr([
    isProd ? MiniCssExtractPluginLoader : styleLoader,
    cssLoader,
    postCssLoader,
    sassLoader
  ])(isProd)
});

module.exports = parseArr([babelLoader, urlLoader, extractCssPluginLoader]);
