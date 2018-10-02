const plugins = require('./plugins');
const path = require('path');

const JSLoader = {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: ["@babel/preset-env"]
        }
    }
};

const ESLintLoader = {
    test: /\.js$/,
    enforce: 'pre',
    exclude: /node_modules/,
    use: {
        loader: 'eslint-loader',
        options: {
            configFile: __dirname + '/.eslintrc'
        },
    }
};

const CSSLoader = {
    test: /\.(css|scss)$/,
    use: plugins.ExtractTextPlugin.extract({
        use: [
            {
                loader: 'css-loader',
                options: {
                    importLoaders: 1
                },
            },
            {
                loader: 'postcss-loader',
                options: {
                    config: {
                        path: __dirname + '/postcss.config.js'
                    }
                },
            },
        ],
    }),
};

module.exports = {
    JSLoader: JSLoader,
    CSSLoader: CSSLoader,
    ESLintLoader:ESLintLoader
};
