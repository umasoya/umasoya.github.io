/* eslint-disable prettier/prettier */
const path                 = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin   = require('css-minimizer-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    mode: 'development',
    watch: false,
    entry: [
        path.resolve(__dirname, 'assets/js/app.ts'),
        path.resolve(__dirname, 'assets/sass/app.scss'),
    ],
    devServer: {
        static: path.resolve(__dirname, 'docs'),
        port: 9000,
        host: '0.0.0.0',
    },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'assets/js')
        ],
        extensions: ['.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'js/app.js'
    },
    module: {
        rules: [
            /*
            {
                enforce: "pre",
                test: /\.(js|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                },
            },
            */
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/app.min.css'
        })
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
        ]
    }
};
