const path = require('path');
const loaders = require('./loaders');
const plugins = require('./plugins');

module.exports = {
  mode: 'development',
  entry: {
    coopComponents: "./js/frontend-components.js",
    coopTheme: "./js/coop-theme.js"
  },
  output: {
    path: path.resolve(__dirname, "../public/js"),
    filename: "[name].js",
  },
  plugins: [
    plugins.ExtractTextPlugin,
    plugins.FractalWebpackPlugin
  ],
  module: {
    rules: [
      loaders.CSSLoader,
      loaders.JSLoader,
      loaders.ESLintLoader
    ]
  }
};
