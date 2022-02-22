const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: resolve(__dirname, 'js', 'index.js'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'img-optimize-loader',
                options: {
                    compress: {
                        mode: 'high',
                        webp: true,
                        gifsicle: true,
                        disableOnDevelopment: false
                    },
                    name: '[path][name].[ext]'
                }
            },
            {
                test: /\.(mp[3|4])$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'index.html')
        }),
    ],
    devServer: {
        port: 3000
    }
}