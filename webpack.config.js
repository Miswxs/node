const path = require('path')
const webpack = require('webpack');
/*============================================
* webpack
============================================*/
module.exports = {
    mode: 'development',
    entry: ['./public/src/js/common.js', './public/src/js/core.js'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devServer: {
        hot: true,
        inline: true,
        host: '0.0.0.0',
        port: '1000',
        contentBase: path.join(__dirname, 'public')
    },
    module: {},
    plugins: [],
    optimization: {},
    resolve: {
        modules: ['node_modules'],
        extensions: ['.js', '.json', '.jsx', '.css'],
    },
};
