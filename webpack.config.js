const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        index: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: [path.resolve(__dirname, 'node_modules')],
            use: [
                {
                    loader: 'babel-loader',
                    options: {presets: ['env']}
                },
                {
                    loader: 'eslint-loader'
                }
            ],
        },
        {
            test: /\.scss$/,
            use: ExtractTextPlugin.extract({
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            })
        }]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ]
};
