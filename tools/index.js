const webpack = require('webpack');
const buildConfig = require('./webpack.config.js');

const __DEV__ = process.env.NODE_ENV === 'development';

const build = (config) => {
  webpack(config)
    .run((err, stats) => {
      if (err) {
        throw new Error(err);
      }

      console.log(stats.toString());
    });
};

if (__DEV__) {
  build(buildConfig());
} else {
  build(buildConfig({isProduction: true}));
}
