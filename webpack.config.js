const webpack = require('webpack');
const path = require('path');

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
        }]
    },
};
