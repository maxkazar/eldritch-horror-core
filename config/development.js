const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const srcDir = path.resolve(__dirname, '..', 'src');
const buildDir = path.resolve(__dirname, '..', 'build');

var config = {
  context: srcDir,

  entry: {
    'eldritch-horror-core': './main.js'
  },

  output: {
    path: buildDir,
    filename: '[name].js',
    library: 'EldritchHorrorCore'
  },

  devServer: {
    contentBase: srcDir,
    inline: false
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    }]
  },

  devtool: "eval-source-map",

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new HtmlWebpackPlugin({
      title: 'Eldritch Horro Demo'
    })
  ],
};

module.exports = config;
