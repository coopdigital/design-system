const path = require('path');
const _ExtractTextPlugin = require('extract-text-webpack-plugin');
const _FractalWebpackPlugin = require('fractal-webpack-plugin');


const ExtractTextPlugin = new _ExtractTextPlugin('../css/[name].css');

const FractalWebpackPlugin = new _FractalWebpackPlugin({
  mode: 'server',
  sync: true,
  configPath: './fractal.js'
})

module.exports = {
  ExtractTextPlugin: ExtractTextPlugin,
  FractalWebpackPlugin: FractalWebpackPlugin
};
