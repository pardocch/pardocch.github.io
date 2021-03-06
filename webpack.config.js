const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
// const extractPlugin = require('extract-text-webpack-plugin');

const dev = {
    mode: "production",
    entry: {
        // webpack打包的對象
        index: `${__dirname}/src/index.jsx`
    },
    output: {
        // 打包後的檔案名稱
        filename: 'index_bundle.js',
        // 打包後的路徑，這裡使用path模組的resolve()去取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./src')
        // path: [`${__dirname}/dist`]
        // publicPath: '/build/',
        // filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                // exclude: /node_modules/,
                // use: extractPlugin.extract({
                //     use: [
                //         'css-loader',
                //         'sass-loader'
                //     ]
                // })
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader'
                }]
            }, {
                test: /\.svg$/,
                loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
            }, {
                test: /\.woff$/,
                loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            }, {
                test: /\.woff2$/,
                loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
            }, {
                test: /\.[ot]tf$/,
                loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
            }, {
                test: /\.eot$/,
                loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
        // extractPlugin
    ],
    resolve: {
        // modules: [path.resolve('./src'), path.resolve('./assets'), path.resolve('./node_modules')]
        modules: [path.resolve('./node_modules')]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 3000,
        publicPath: '/'
    }
}

const prod = {
    mode: "production",
    entry: {
        // webpack打包的對象
        index: `${__dirname}/src/index.jsx`
    },
    output: {
        // 打包後的檔案名稱
        filename: 'index_bundle.js',
        // 打包後的路徑，這裡使用path模組的resolve()去取得絕對位置，也就是目前專案的根目錄
        path: path.resolve('./dist')
        // path: [`${__dirname}/dist`]
        // publicPath: '/build/',
        // filename: 'bundle.[hash].js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader', 
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                // exclude: /node_modules/,
                // use: extractPlugin.extract({
                //     use: [
                //         'css-loader',
                //         'sass-loader'
                //     ]
                // })
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                }, {
                    loader: 'sass-loader'
                }]
            }, {
                test: /\.svg$/,
                loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
            }, {
                test: /\.woff$/,
                loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
            }, {
                test: /\.woff2$/,
                loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
            }, {
                test: /\.[ot]tf$/,
                loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
            }, {
                test: /\.eot$/,
                loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: './src/index.html'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
        // extractPlugin
    ],
    resolve: {
        // modules: [path.resolve('./src'), path.resolve('./assets'), path.resolve('./node_modules')]
        modules: [path.resolve('./node_modules')]
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 3000,
        publicPath: '/'
    }
};

module.exports = [dev, prod];

// module.exports = {
//     mode: "production",
//     entry: {
//         // webpack打包的對象
//         index: `${__dirname}/src/index.jsx`
//     },
//     output: {
//         // 打包後的檔案名稱
//         filename: 'index_bundle.js',
//         // 打包後的路徑，這裡使用path模組的resolve()去取得絕對位置，也就是目前專案的根目錄
//         path: path.resolve('./src')
//         // path: [`${__dirname}/dist`]
//         // publicPath: '/build/',
//         // filename: 'bundle.[hash].js'
//     },
//     module: {
//         rules: [
//             {
//                 test: /\.(js|jsx)$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader'
//                 }
//             },
//             {
//                 test: /\.css$/,
//                 use: [
//                     'style-loader', 
//                     'css-loader'
//                 ]
//             },
//             {
//                 test: /\.scss$/,
//                 // exclude: /node_modules/,
//                 // use: extractPlugin.extract({
//                 //     use: [
//                 //         'css-loader',
//                 //         'sass-loader'
//                 //     ]
//                 // })
//                 use: [{
//                     loader: 'style-loader',
//                 }, {
//                     loader: 'css-loader',
//                 }, {
//                     loader: 'sass-loader'
//                 }]
//             }, {
//                 test: /\.svg$/,
//                 loader: 'url-loader?limit=65000&mimetype=image/svg+xml&name=fonts/[name].[ext]'
//             }, {
//                 test: /\.woff$/,
//                 loader: 'url-loader?limit=65000&mimetype=application/font-woff&name=fonts/[name].[ext]'
//             }, {
//                 test: /\.woff2$/,
//                 loader: 'url-loader?limit=65000&mimetype=application/font-woff2&name=fonts/[name].[ext]'
//             }, {
//                 test: /\.[ot]tf$/,
//                 loader: 'url-loader?limit=65000&mimetype=application/octet-stream&name=fonts/[name].[ext]'
//             }, {
//                 test: /\.eot$/,
//                 loader: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]'
//             }
//         ]
//     },
//     plugins: [
//         new HtmlWebPackPlugin({
//             template: './src/index.html'
//         }),
//         new webpack.DefinePlugin({
//             'process.env': {
//                 NODE_ENV: JSON.stringify('production')
//             }
//         })
//         // extractPlugin
//     ],
//     resolve: {
//         // modules: [path.resolve('./src'), path.resolve('./assets'), path.resolve('./node_modules')]
//         modules: [path.resolve('./node_modules')]
//     },
//     devServer: {
//         contentBase: path.resolve(__dirname, 'dist'),
//         compress: true,
//         hot: true,
//         port: 3000,
//         publicPath: '/'
//     }
// };