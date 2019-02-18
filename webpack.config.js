const path = require('path');

module.exports = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|server)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  mode: 'development',
  devtool: 'source-map'
};
//Add an alias for actions, copmonents, reducers, utils, and constants, config