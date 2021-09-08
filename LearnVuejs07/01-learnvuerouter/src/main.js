import Vue from 'vue'
import App from './App'
import router from './router'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    // 这里导入router路由
    router,
    render: h => h(App)
})