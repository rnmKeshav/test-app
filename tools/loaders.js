const parseArr = require('./helpers').parseArr;

let babelLoader = () => ({
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: [{
    loader: 'babel-loader'
  }]
});

module.exports = parseArr([
  babelLoader
]);