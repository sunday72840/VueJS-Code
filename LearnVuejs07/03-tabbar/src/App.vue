<template>
<!-- 这里接受的是两个组件封装的内容 -->
  <div id="app">
    <main-tab-bar></main-tab-bar>
    <!-- <tab-bar>
      <tab-bar-item path="/home" activeColor="#8a8a8a">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="#8a8a8a">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="#8a8a8a">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path = "/profile" activeColor="#8a8a8a">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar> -->
    <router-view></router-view>
  </div>
</template>

<script>
import MainTabBar from "components/mainTabbar/MainTabBar.vue"

// import TabBar from 'components/tabbar/TabBar.vue'
// import TabBarItem from 'components/tabbar/TabBarItem.vue'

export default {
  name: 'App',
  components:{
    MainTabBar
  }
}
</script>

<style>
    @import "./assets/css/base.css";
</style>
