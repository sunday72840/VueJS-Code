const WebPackMerge = require('webpack-merge')
const BaseConfig = require('./base.config')

module.exports = WebPackMerge(BaseConfig, {
    devServer: {
        //需要监听的文件夹
        contentBase: './dist',
        //是否需要页面实时刷新
        inline: true,
        //可以设置端口
        // port: 8080
    }
})