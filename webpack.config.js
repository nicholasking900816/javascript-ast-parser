const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/test/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[contenthash].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'source-map',
    plugins: [ new HtmlWebpackPlugin() ]
}