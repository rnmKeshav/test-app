const parseArr = require('./helpers').parseArr;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

let babelLoader = () => ({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader'
  }]
});

let cssLoader = () => 'css-loader';

let postCssLoader = () => ({
  loader: 'postcss-loader',
  options: {
    plugins: () => {
      return [
        require('autoprefixer')({
          browsers: '> 5%'
        })
      ]}
  }
});

let sassLoader = () => 'sass-loader';

let MiniCssExtractPluginLoader = () => MiniCssExtractPlugin.loader;

let urlLoader = () => ({
  test: /\.(png|jpg|gif|svg)$/,
  exclude: /node_modules/,
  use: [{
    loader: 'url-loader',
    options: {
      name: '[name].[ext]',
      outputPath: 'images/',
      limit: 5000
    }
  }]
});

let extractCssPluginLoader = (isProd) => ({
  test: /\.s?css$/,
  use: parseArr([MiniCssExtractPluginLoader, cssLoader, postCssLoader, sassLoader])(isProd)
});

module.exports = parseArr([
  babelLoader,
  extractCssPluginLoader,
  urlLoader
]);