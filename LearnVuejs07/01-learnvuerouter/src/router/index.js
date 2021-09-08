// 配置路由相关的信息

import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

// 路由懒加载的方式导入
const Home = () =>
    import ('../components/Home.vue')
const About = () =>
    import ('../components/About.vue')
const User = () =>
    import ('../components/User.vue')
const HomeNews = () =>
    import ('../components/HomeNews.vue')
const HomeMessage = () =>
    import ('../components/HomeMessage.vue')
const Porfile = () =>
    import ('../components/Profile.vue')


//1.通过Vue.use(插件)，安装插件
Vue.use(VueRouter)

//2.创建VueRouter对象
const routes = [
        //配置路由的和组件之间的映射关系
        {
            path: '/',
            // redirect重定向：路由的默认路径
            redirect: '/Home'
        },
        {
            path: '/Home',
            component: Home,
            // meta是元数据（描述数据的数据）
            meta: {
                title: '首页'
            },
            // 这里是子属性页面
            children: [{
                    path: '',
                    redirect: 'news'
                },
                {
                    path: 'news',
                    component: HomeNews
                }, {
                    path: 'message',
                    component: HomeMessage
                }
            ]
        },
        {
            path: '/About',
            component: About,
            // meta是元数据（描述数据的数据）
            meta: {
                title: '关于'
            }
        },
        {
            //动态获取userid
            path: '/User/:user_id',
            component: User,
            // meta是元数据（描述数据的数据）
            meta: {
                title: '用户'
            }
        },
        {
            path: '/Profile',
            component: Porfile,
            // meta是元数据（描述数据的数据）
            meta: {
                title: '档案'
            }
        }
    ]
    // 创建VueRouter对象
const router = new VueRouter({
    //传入映射关系配置
    routes,
    //把hash模式改成history模式
    mode: 'history',
    // 这个属性是匹配APP.vue文件中router-link标签的，如果改一个其他都改
    linkActiveClass: "active"
})

// 用router对象调用beforeEach函数，函数本身需要传入三个参数to, from, next来实现动态跳转
// 这里的router对象是 上面new出来的router对象

// 前置钩子（hook）表示回调的意思，跳转前回调
router.beforeEach((to, from, next) => {
    // to是上面创建的路由页面对象 
    // 从from跳转到to
    // 存在路由嵌套的话需要从matched[0]中取出来，to.matched[0].meta.title 从matched数组中的第0个下面的meta里找title，来解决首页不显示的问题
    document.title = to.matched[0].meta.title
        // 必须调用，这是下一步的意思
    next()
})

// 后置回调,跳转之后调用的
router.afterEach((to, from) => {
        console.log('-----');
    })
    //3.将router对象导出，然后到main.js入口文件中传入到Vue实例中

export default router