const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { VueLoaderPlugin } = require('vue-loader');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: './entry.js',
    },
    plugins: [
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(['dist'])
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, './'),
        // publicPath:'./asyncComponent/dist/'
    },
    module: {
        rules: [
            {
                test:/\.vue$/,
                loader: "vue-loader"
            }
        ]
    },

};