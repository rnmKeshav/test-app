const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

const buildConfig = require('../config/build_config');

module.exports = (env) => {
  let isProd = env && env.isProduction;

  return {
    resolve: {
      extensions: ['*','.js', '.jsx', '.json']
    },
    entry: buildConfig.entryPaths,
    output: {
      path: buildConfig.output.dirname,
      filename: path.join(buildConfig.output.javascriptFolderName, isProd? '[name].[chunkhash:12].js': '[name].js')
    },
    module: {
      rules: loaders(isProd)
    },
    plugins: plugins(isProd),
    mode: isProd? 'production': 'development',
    devtool: isProd? 'hidden-source-map': 'source-map'
  };
};
