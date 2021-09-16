<template>
  <div id="app">
    
    <h2>------------app内容:modules中的内容</h2>
    <h2>{{$store.state.a.name}}</h2>
    <button @click="updateName">修改名字</button>
    <h2>{{$store.getters.fullName}}</h2>
    <h2>{{$store.getters.fullName2}}</h2>
    <h2>{{$store.getters.fullName3}}</h2>
    <button @click="asyncUpdateNme">异步修改</button>

    <h2>------------app内容:info对象的内容是否是响应式的</h2>
    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
    <h2>=-=-=-=-=-=-=-=-=-=APP内容=-=-=-=-=-=-=-=-=-=-=-=</h2>
    <h2>{{$store.state.counter}}</h2>
    <!-- <h2>{{counter}}</h2> -->
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>

    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <button @click="addStudent">添加学生</button>

    <h2>=-=-=-=-=-=-=-=-=-=APP内容:getters相关的内容=-=-=-=-=-=-=-=-=-=-=-=</h2>
    <!-- <h1>{{$store.getters.powerCounter}}</h1>
    <h2>{{$store.getters.more20stu}}</h2>
    <h2>{{$store.getters.more20stuLength}}</h2> -->


    <h2>{{$store.getters.moreAgestu(20)}}</h2>
    <h2>-=-=-=-=-=-=-=-=-=-=-=-=-Hello VueX的内容-=-=-=-=-=-=-=-=-=-=- </h2>
    <hello-vue-x></hello-vue-x>
  </div>
</template>

<script>

import HelloVueX from './components/HelloVueX.vue'
// 导入抽离出去的常量js文件
import {INCREMENT} from './store/mutations-types'
export default {
  name: 'App',
  components:{
    HelloVueX
  },
  data (){
    return {
      message :'我是APP组件'
    }
  },
  // computed:{
  //   more20stu(){
  //     return  this.$store.state.students.filter(a => a.age >20)
  //   }
  // },
  methods:{
    addition (){
      this.$store.commit(INCREMENT)
    },
    subtraction(){      
      this.$store.commit('decrement')
    },
    addCount(count){
      // 普通的提交风格
      this.$store.commit('incrementCount',count)

      // 2.特殊的提交风格
      // this.$store.commit({
      //   type:'incrementCount',
      //   count
      // })
    },
    addStudent (){
      const stu = {id:116,name:'alan',age:35}
      this.$store.commit('addStudent',stu)
    },
    updateInfo (){
      // this.$store.commit('updateInfo')
      // 如果回调多个参数可以在后面使用一个对象{}
      // this.$store.dispatch('aUpdateInfo',{
      //   message:'我是携带的信息',
      //   success :() =>{
      //     console.log('里面回调已完成！');
      //   }
      // })
      // 这里传入两个或者多个参数供index.js里的aUpdateInfo构造函数调用
      // 这里的then是index.js文件中Promise里的一个then方法
      this.$store.dispatch('aUpdateInfo','我是携带的信息').then(res =>{
        console.log('里面完成了提交!');
        console.log(res);
      })
    },
    updateName(){
      this.$store.commit('updateName','lisi')
    },
    asyncUpdateNme(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>
</style>
