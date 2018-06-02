const parseArr = require('./helpers').parseArr;
const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");  // Extract css into seperate file
const CleanWebpackPlugin = require('clean-webpack-plugin');   // Cleans build directory before putting newly built file
const htmlWebpackPlugin = require('html-webpack-plugin'); // Appends newly built file to html. Comes handy in prod mode

const buildConfig = require('../config/build_config');

const cleanBuildDirectory = () => {
  
  return new CleanWebpackPlugin([buildConfig.output.javascriptFolderName, buildConfig.output.cssFolderName], {
    root: buildConfig.output.dirname
  });
};

const extractCss = (isProd) => {

  return new MiniCssExtractPlugin({
    filename: path.join(buildConfig.output.cssFolderName, isProd? '[name].[chunkhash:12].css': '[name].css')
  });
};

const copyHtmlAndInjectAsset = () => {
  return new htmlWebpackPlugin({
    inject: true,
    template: buildConfig.templatePath
  });
};

module.exports = parseArr([
  cleanBuildDirectory,
  extractCss,
  copyHtmlAndInjectAsset
]);