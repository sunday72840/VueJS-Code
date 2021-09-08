const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const WebPackMerge = require('webpack-merge')
const BaseConfig = require('./base.config')
module.exports = WebPackMerge(BaseConfig, {
    //插件配置
    plugins: [
        //压缩js代码
        new UglifyjsWebpackPlugin()
    ]
})