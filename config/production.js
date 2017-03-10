const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.resolve(__dirname, '..', 'src');
const buildDir = path.resolve(__dirname, '..', 'build');

var config = {
  context: srcDir,

  entry: {
    'eldritch-horror-core': './main.js'
  },

  output: {
    path: buildDir,
    filename: '[name]-[hash].js',
    library: 'EldritchHorrorCore'
  },

  devServer: {
    contentBase: srcDir,
    compress: true,
    inline: false
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: ['babel-loader', 'eslint-loader']
    }]
  },

  devtool: "source-map",

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new CleanWebpackPlugin('build', {
      root: rootDir
    }),
    new HtmlWebpackPlugin({
      title: 'Eldritch Horro Demo'
    }),
    new webpack.optimize.UglifyJsPlugin({
      beautify: false,
      mangle: {
          screw_ie8: true,
          keep_fnames: true
      },
      compress: {
          screw_ie8: true
      },
      comments: false,
      sourceMap: true
    })
  ],
};

module.exports = config;
