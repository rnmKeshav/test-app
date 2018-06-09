const parseArr = require("./helpers").parseArr;
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); // Extract css into seperate file
const CleanWebpackPlugin = require("clean-webpack-plugin"); // Cleans build directory before putting newly built file
const HtmlWebpackPlugin = require("html-webpack-plugin"); // Appends newly built file to html. Comes handy in prod mode
const CopyWebpackPlugin = require("copy-webpack-plugin");

const buildConfig = require("../config/build_config");

const cleanBuildDirectory = () => {
  return new CleanWebpackPlugin(
    [buildConfig.output.javascriptFolderName, buildConfig.output.cssFolderName],
    {
      root: buildConfig.output.dirname
    }
  );
};

const extractCss = isProd => {
  return new MiniCssExtractPlugin({
    filename: path.join(
      buildConfig.output.cssFolderName,
      isProd ? "[name].[chunkhash:12].css" : "[name].css"
    )
  });
};

const copyImagesToBuild = isProd => {
  return new CopyWebpackPlugin([
    {
      from: buildConfig.imagesSourcePath,
      to: buildConfig.output.imageFolderName
    }
  ]);
};
const copyHtmlAndInjectAsset = () => {
  return new HtmlWebpackPlugin({
    inject: true,
    template: buildConfig.templatePath
  });
};

module.exports = parseArr([
  cleanBuildDirectory,
  extractCss,
  copyImagesToBuild,
  copyHtmlAndInjectAsset
]);
