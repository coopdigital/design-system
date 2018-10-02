const path = require("path");
// const coopComponents = require('coop-frontend-components');

module.exports = {
  mode: 'development',
  entry: "./js/frontend-components.js",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "frontend-components.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"]
          }
        }
      }
    ]
  }
};
