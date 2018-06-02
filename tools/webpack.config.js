const path = require('path');
const loaders = require('./loaders');

const entryPaths = {
  app: path.resolve(process.cwd(), 'src/client.js')
};

module.exports = (env) => {
  let isProd = env && env.isProduction;

  return {
    resolve: {
      extensions: ['*','.js', '.jsx', '.json']
    },
    entry: entryPaths,
    output: {
      path: path.resolve(process.cwd(), 'build'),
      filename: path.join('javascripts', isProd? '[name].[chunkhash:12].js': '[name].js')
    },
    module: {
      rules: loaders(isProd)
    },
    mode: isProd? 'production': 'development',
    devtool: isProd? 'hidden-source-map': 'source-map'
  };
};
