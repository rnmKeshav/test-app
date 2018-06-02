const parseArr = require('./helpers').parseArr;
const CleanWebpackPlugin = require('clean-webpack-plugin');   // Cleans build directory before putting newly built file
const htmlWebpackPlugin = require('html-webpack-plugin'); // Appends newly built file to html. Comes handy in prod mode

const buildConfig = require('../config/build_config');

const cleanBuildDirectory = () => {
  
  return new CleanWebpackPlugin([buildConfig.output.javascriptFolderName+'/*.*'], {
    root: buildConfig.output.dirname
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
  copyHtmlAndInjectAsset
]);