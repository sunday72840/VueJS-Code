import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'


Vue.use(Router)

const Home = () =>
    import ('../views/home/Home.vue')
const Category = () =>
    import ('../views/category/Category.vue')
const Cart = () =>
    import ('../views/cart/Cart.vue')
const Profile = () =>
    import ('../views/profile/Profile.vue')

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/category',
        component: Category
    },
    {
        path: '/cart',
        component: Cart
    }
]
const router = new VueRouter({
    mode: "history",
    routes
})

export default router
// export default new Router({
//     routes: [{
//         path: '/',
//         name: 'HelloWorld',
//         component: HelloWorld
//     }]
// })