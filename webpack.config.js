const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    watch: false,
    entry: path.resolve(__dirname, "assets/js/app.ts"),
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
        path: path.resolve(__dirname, "docs/js"),
        filename: 'app.js'
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
            /*
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ]
            }
            */
        ]
    }
};
