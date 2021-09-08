<template>
<!-- 这里封装的时 tabbar里的内容 -->
<div class="tab-bar-item" @click="itemClick">
    <!-- 如果为true的时候显示这个图片 -->
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <!-- 如果为false的时候显示这个图片 -->
    <div v-else><slot name="item-icon-active"></slot></div>
    <!-- 这里定义的文字颜色 -->
    <div :style="activeStyle"><slot name="item-text"></slot></div>
    
</div>
</template>

<script>
export default {
name:'TabBarItem',
props:{
    path:String,
    activeColor:{
        type:String,
        default:'red'
    }
},
data (){
    return {
        // isActive : false
    }
},
computed:{
    isActive (){
        return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle (){
        // 判断是否是活跃状态，如果是活跃状态就给个activeColor 如果不是就给个默认的空
        return this.isActive ?  {color:this.activeColor} :{} 
    }

},
methods: {
    itemClick (){
        this.$router.replace(this.path)
    }
}
}
</script>

<style>
.tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
    font-family: "Microsoft YaHei";
}

.tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
}


</style>
