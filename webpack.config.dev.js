const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin'); //css单独打包
const HtmlWebpackPlugin = require('html-webpack-plugin'); //生成html

//定义地址
let ROOT_PATH = path.resolve(__dirname);
let APP_PATH = path.resolve(ROOT_PATH, 'src'); //__dirname 中的src目录，以此类推
let APP_FILE = path.resolve(APP_PATH, 'index'); //根目录文件App.jsx地址
let BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {

    entry: {
        app: APP_FILE,
        common: [
            'react',
            'react-dom',
            'react-router',
        ]
    },

    output: {
        publicPath: '', //编译好的文件，在服务器的路径,域名会自动添加到前面
        path: BUILD_PATH, //编译到当前目录
        filename: 'app.[hash].js', //编译后的文件名字
        chunkFilename: '[name].[chunkhash:5].min.js'
    },


    module: {
        rules: [{
            test: /\.js$/,
            exclude: /^node_modules$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }, {
            test: /\.css$/,
            exclude: /^node_modules$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader'
            })
        }, {
            test: /\.(eot|woff|svg|ttf|woff2|gif|appcache)(\?|$)/,
            exclude: /^node_modules$/,
            loader: 'file-loader?name=./style/[name].[ext]'
        }, {
            test: /\.(png|jpg|gif)$/,
            exclude: /^node_modules$/,
            loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]',
            //注意后面那个limit的参数，当你图片大小小于这个限制的时候，会自动启用base64编码图
        }, {
            test: /\.jsx$/,
            exclude: /^node_modules$/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015', 'react', 'stage-0']
            }
        }]
    },


    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"dev"',
        }),
        // new HtmlWebpackPlugin({  //根据模板插入css/js等生成最终HTML
        //     filename: '../index.html', //生成的html存放路径，相对于 path
        //     template: './src/template.jsx/index.html', //html模板路径
        //     inject: 'body',
        //     hash: true
        // }),
        new ExtractTextPlugin({filename: '[name].css', allChunks: true,}),
        //提取出来的样式和common.js会自动添加进发布模式的html文件中，原来的html没有
        new webpack.optimize.CommonsChunkPlugin({name: 'common', filename: 'common.bundle.js'}),

        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

    resolve: {
        extensions: ['.js', '.jsx', '.css'] //后缀名自动补全
    }
};
