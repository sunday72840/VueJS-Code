<template>
<div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    
    <router-link to="/Home/news">新闻</router-link>
    <router-link to="/Home/message">消息</router-link>
    <router-view></router-view>

    <h2>{{message}}</h2>
</div>
</template>

<script>
export default {
    name:"Home",
    data (){
        return {
            message:'Hello Vuejs',
            path:'/home/news'
        }
    },
    // 生命周期函数（created）是响应式函数，当数据被改变时程序会调用这个函数
    // 当访问页面时创建生命周期函数
    created (){
        // 这里执行更改当前页面的title
        // document.title = '首页'
        console.log('home created');
    },
    // 当跳转页面后销毁这个生命周期函数
    destroyed (){
        console.log('home destroyed');
    },

    // activated当页面活跃的时候会调用这个函数
    // 这两个函数只有在有keep-alive组件时才会被调用
    activated(){
        this.$router.push(this.path);
    },
    // deactivated(){
    //     console.log('deactivated');
    // },

    // 使用组件内导航,当用户跳转页面时,把当前的路径保存到this.path里
    beforeRouteLeave (to, from, next) {
        this.path = this.$route.path
        next()
    }
}
components: {

}
</script>

<style>

</style>
