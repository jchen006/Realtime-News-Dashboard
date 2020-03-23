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
      features: path.resolve(__dirname, './src/client/features'),
      actions: path.resolve(__dirname, './src/client/actions'),
      components: path.resolve(__dirname, './src/client/components'),
      dashboards: path.resolve(__dirname, './src/client/dashboards'),
      constants: path.resolve(__dirname, './src/client/constants'),
      reducers: path.resolve(__dirname, './src/client/reducers'),
    },
    extensions: ['.jsx', '.js']
  },
  mode: 'development',
  devtool: 'source-map'
};