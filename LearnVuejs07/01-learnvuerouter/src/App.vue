<template>
  <div id="app">

    
    <!-- tag属性是可以渲染标签的
    to属性默认是渲染成A标签
    replace属性是禁止返回的。
    -->
    <!-- <router-link to="/Home" tag="button" replace active-class="active">首页</router-link>
    <router-link to="/About" tag="button" replace active-class="active">关于</router-link> -->
    <!-- <router-view></router-view>
    <router-link to="/Home" tag="button" replace>首页</router-link>
    <router-link to="/About" tag="button" replace>关于</router-link> -->
    
    <!-- query加原生代码的传参方式-->
    <button @click="profileClick">档案</button>

    <!-- 监听按钮点击 -->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>

    <router-link  :to="'/User/'+user_id" tag="button">用户</router-link>

    <!--如果这里要传参必须前面要加V-build,语法糖写法是 ： 然后给to后面的字符串添加{path:'这里添加组件的路径就行'}
    query是一种动态传参的方式
    -->
    <!-- <router-link :to="{path:'/Profile',query:{name:'sss',age:18,height:1.88}}" tag="button">档案</router-link> -->
    <keep-alive exclude="Profile">
    <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      user_id:'zhangsan'
    }
  },
  methods:{
    homeClick(){
      //通过JS原生代码的方式修改路由
      // this.$router.push('/Home')
      // 还有一种方法是 this.$router.replace方法可以禁止返回
      this.$router.replace('/Home')
      // console.log('homeClick');
    },
    aboutClick(){
      // this.$router.push('/About')
      this.$router.replace('/About')
      // console.log('aboutClick');
    },
    // 如果使用原始代码传参是这种方式
    profileClick(){
      this.$router.push(
        {
          path:'/profile',
          // query传参是对象的方式传的,是个数据量大的
          query:{
            name:'kobe',
            age:18,
            heigth:1.99
          }
        }
      )
    }
  }
}
</script>

<style>
  .active {
    color: #ff09ff;
  }
</style>
