<template>
<div>
    <h2>我是用户界面</h2>
    <p>看我看我，我变了，我是用户界面</p>
    <!-- 可以用这种方式获取 -->
    <h2>当前登录用户:{{user_id}}</h2>
    <!-- 也可以直接获取 -->
    <h2>{{$route.params.user_id}}</h2>
</div>
</template>

<script>
export default {
name:'User',
computed:{
    user_id (){
        // 获取当前用户的userid，$route是$router中的一个方法
        return this.$route.params.user_id
    }
},
    // 生命周期函数（created）是响应式函数，当数据被改变时程序会调用这个函数
// created (){
//     // 这里执行更改当前页面的title
//     document.title ='用户'
// }
}
components: {

}
</script>

<style>

</style>
