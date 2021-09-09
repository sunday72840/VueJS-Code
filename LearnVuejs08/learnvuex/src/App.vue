<template>
  <div id="app">
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
      this.$store.commit('increment')
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
    }
  }
}
</script>

<style>
</style>
