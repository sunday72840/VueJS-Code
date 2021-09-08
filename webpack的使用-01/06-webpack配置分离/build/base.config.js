const { publicDecrypt } = require('crypto');
const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    //入口配置
    entry: './src/main.js',
    //出口配置
    output: {
        // 动态获取路径
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    //模块配置
    module: {
        rules: [{
                test: /\.css$/,
                //css-loader负责将css文件加载
                //style-loader负责将样式添加到DOM中
                //使用多个loader时，是从右向左读
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: [{
                    loader: 'style-loader' // creates style nodes from JS strings
                }, {
                    loader: 'css-loader' // translates CSS into CommonJS
                }, {
                    loader: 'less-loader' // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        //当加载的图片小于limit的时候，会将图片编译成base64的字符串形式
                        //当加载的图片大于limit时需要使用file-loader模块进行加载
                        limit: 8192,
                        //[name]是个变量，用来获取文件夹里图片名字的，
                        //[hash:8]用来截取图片的哈希值的8位数做比对
                        //[ext]也是变量用来获取图片文件的扩展名的
                        name: 'img/[name].[hash:8].[ext]'
                    }
                }]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ],
    },
    //解析配置
    resolve: {
        //alias 别名的意思
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    //插件配置
    plugins: [
        //用于代码声明
        new webpack.BannerPlugin('The final copyright belongs to Squirrel Technology'),
        //设置生成的模板配置
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}