const path = require('path');

module.exports = {
  splitChunks: {
    cacheGroups: {
      vendor: {
        chunks: "initial",
        test: path.resolve(process.cwd(), "node_modules"),
        name: "vendor",
        enforce: true
      }
    }
  }
};
