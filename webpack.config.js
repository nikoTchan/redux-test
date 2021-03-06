const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        main: [
            path.resolve(__dirname, 'src/js/index.js'),
            path.resolve(__dirname, 'src/css/style.scss')
        ],
        dynamic: path.resolve(__dirname, 'src/js/dynamic.js'),
        tsMain: [
            path.resolve(__dirname, 'src/ts/1_basic.ts'),
            path.resolve(__dirname, 'src/ts/2_example_interface.ts'),
        ]
    },
    output: {
        path: path.resolve(__dirname, 'public/dist'),
        filename: 'js/[name].js',
        publicPath: '/dist/',
        chunkFilename: 'js/[id].[chunkhash].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        {
                            loader: "css-loader",
                            options: {
                                minimize: true
                            }
                        },
                        {
                            loader: "sass-loader"
                        }
                    ]
                })
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"],
                        plugins: ["syntax-dynamic-import"]
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                use: "ts-loader"
            },
            {
                test: /\.twig$/,
                use: {
                    loader: "twig-loader",
                    options: {
                        node: { fs: "empty" }
                    }
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['public/dist'], {
            root: __dirname,
            exclude: ['lib']
        }),
        new ExtractTextPlugin("css/[name].css"),
        new webpack.DllReferencePlugin({
            manifest: require('./modules-manifest')
        })
    ]
};

