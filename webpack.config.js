const path = require('path');
const webpack = require('webpack');
// const HotModuleReplacementPlugin = new webpack.HotModuleReplacementPlugin();
const HtmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src', 'index.html'),
    filename: 'index.html',
    inject: 'body',
    cache:false
});

//define the Host URL constants
var API_URL = {
    development: JSON.stringify('http://localhost:3030'),
    production: JSON.stringify('http://virtserver.swaggerhub.com/suraz/ContactsAPI/1.0.0')
}

//check the environment
var environment = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    entry: path.resolve(__dirname, 'src', 'index.js'),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
            { test: /\.(scss|css)$/,  use: ['style-loader','css-loader']},
            { test: /\.(jpe?g|png|gif|svg)$/i, use: 'url-loader'}
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        // HotModuleReplacementPlugin,
        new DashboardPlugin(),
        new webpack.DefinePlugin({
            'API_URL': API_URL[environment]
         }),
    ]
};