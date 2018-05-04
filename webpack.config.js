const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { VueLoaderPlugin } = require('vue-loader')
module.exports = {
    entry: {
        index: './entry.js',
        // another: './src/another-module.js'
    },
    plugins: [
        // new HTMLWebpackPlugin({
        //     title: 'Code Splitting'
        // }),
        new VueLoaderPlugin()
        // new BundleAnalyzerPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        // path: './asyncComponent/',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, './dist/')
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