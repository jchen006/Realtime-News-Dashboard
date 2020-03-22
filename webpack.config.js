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
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/client/components'),
      features: path.resolve(__dirname, 'src/client/features'),
      dashboards: path.resolve(__dirname, 'src/client/dashboards'),
      constants: path.resolve(__dirname, 'src/client/constants'),
      reducers: path.resolve(__dirname, 'src/client/reducers'),
      actions: path.resolve(__dirname, 'src/client/actions'),
    },
    extensions: ['.jsx', '.js']
  },
  mode: 'development',
  devtool: 'source-map'
};
//Add an alias for actions, copmonents, reducers, utils, and constants, config