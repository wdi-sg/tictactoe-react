const { resolve, join } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const IS_DEV = process.env.NODE_ENV !== 'production';

module.exports = {
    target: 'web',
    entry: ['./src/client/index.jsx'],
    output: {
        publicPath: '/',
        path: resolve(__dirname, '..', 'build', 'client'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                use: ['babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                // For CSS modules
                // For pure CSS - /\.css$/i,
                // For Sass/SCSS - /\.((c|sa|sc)ss)$/i,
                // For Less - /\.((c|le)ss)$/i,
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            // Run `postcss-loader` on each CSS `@import`, do not forget that `sass-loader` compile non CSS `@import`'s into a single file
                            // If you need run `sass-loader` and `postcss-loader` on each CSS `@import` please set it to `2`
                            importLoaders: 2,
                            // Automatically enable css modules for files satisfying `/\.module\.\w+$/i` RegExp.
                            modules: { auto: true },
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {},
                    },
                    // Can be `less-loader`
                    // The `test` property should be `\.less/i`
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/i,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: '[name].css',
            disable: IS_DEV
        }),
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ],
    resolve: {
        modules: ['node_modules', join('src', 'client')],
        extensions: ['.js', '.jsx']
    },
    stats: {
        assetsSort: '!size',
        children: false,
        chunks: false,
        colors: true,
        entrypoints: false,
        modules: false
    }
};