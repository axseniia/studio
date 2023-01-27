const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  module: {
    rules: [
      { 
        test: /\.css$/, 
        use: ["style-loader", "css-loader"], 
        exclude: /node_modules/ 
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: "src/index.html",
    }),
    new CopyPlugin({
      patterns: [
        { from: "assets", to: "." },
      ]})
  ],
};