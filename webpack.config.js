const path = require('path');

module.exports = {
  mode: 'production',
  devtool: "source-map",
  entry: './src/index.ts',
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        loader: 'ts-loader',
        test: /\.tsx?$/,
      }
    ],
  },
};