const path = require('path')
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
/*============================================
* webpack
============================================*/
module.exports = {
    mode: 'development',
    // entry: ['./public/src/js/common.js', './public/src/js/core.js'],
    entry: {
        'bundle.min.css': [
            path.resolve(__dirname, 'src/css/common.css'),
            path.resolve(__dirname, 'src/css/layout.css')
        ],
        'bundle.js': [
            path.resolve(__dirname, 'src/common.js')
        ]
    },
    output: {
        filename: '[name]',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin("bundle.min.css")
    ]
}
