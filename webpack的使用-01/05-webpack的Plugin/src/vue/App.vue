<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">Vue</button>
        <h2>{{name}}</h2>
        <Cpn></Cpn>
    </div>
</template>

<script>

import Cpn from './Cpn.vue'

    export default{
        name:"App",
        components:{
            Cpn
        },
        data() {
            return {
                message: 'Hello,WebPack',
                name: "codeVueJs"
            }
        },
        methods: {
            btnClick() {
            }
        }
    }
</script>

<style>
.title{
    color: #a9a9a9;
}
</style>
