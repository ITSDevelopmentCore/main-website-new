const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMiniExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const webpack = require('webpack');


module.exports = {
    watch: true,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 1000
    },

    mode: 'development',

    watch: true,

    watchOptions: {
        aggregateTimeout: 200,
        poll: 1000,
    },

    entry: {
        telegram: './source/page_telegram/main/index.js',
        development: './source/page_development/main/index.js'
    },

    output: {
        path: path.join(__dirname, 'build'),
        filename: 'scripts/[contenthash].bundle.js',
        assetModuleFilename: 'assets/images/[name][ext]',
        asyncChunks: true,
        clean: true
    },


    module: {

        rules: [


            {
                test: /\.(png|svg)$/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/media/[name][ext]"
                }
            },

            {
                test: /\.(woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: "assets/fonts/[name][ext]"
                }
            },

            {
                test: /\.(js|jsx)$/,
                exclude: /nodeModules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            configFile: path.resolve("./build_configs/babel.config.json")
                        }
                    }
                ]
            },

            {
                test: /\.css$/i,
                use: [
                    {
                        loader: CssMiniExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                config: path.resolve("./build_configs/postcss.config.js")
                            },
                        }
                    },
                ],
            },

            {
                test: /\.s(a|c)ss$/,
                use: [
                    {
                        loader: CssMiniExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader', options: { importLoaders: 1 }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                config: path.resolve("./build_configs/postcss.config.js")
                            },
                        }
                    },
                    {
                        loader: 'sass-loader',
                    }
                ]
            },

        ],
    },

    optimization: {
        minimizer: [
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                },
            },
        },
    },

    plugins: [
        new CssMiniExtractPlugin({
            filename: "assets/css/[name].css"
        }),
        new HtmlWebpackPlugin({
            template: 'source/page_telegram/html/index.html',
            chunks: ['telegram'],
            filename: "html/telegram.html"
        }),
        new HtmlWebpackPlugin({
            template: 'source/page_development/html/index.html',
            chunks: ['development'],
            filename: "html/development.html"
        })
    ],

}
