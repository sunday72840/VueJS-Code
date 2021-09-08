<template>
    <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">Vue</button>
        <h2>{{name}}</h2>
    </div>
</template>

<script>
    export default{
        name:"App",
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
