import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import my from '../views/my.vue'
import shoping from '../views/shoping.vue'
import sp from '../views/sp.vue'
import sp_list from "../views/sp_list.vue"
import detalis from "../views/detalis.vue"
Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: '/home',
        meta: { title: '首页' }
    },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta: { title: '首页' }
    },
    {
        path: '/my',
        name: 'my',
        component: my,
        meta: { title: '我的' }
    },
    {
        path: '/sp',
        name: 'sp',
        component: sp,
        meta: { title: '购物' }
    },
    {
        path: '/shoping',
        name: 'shoping',
        component: shoping,
        meta: { title: '购物车' }
    },
    {
        path: '/sp_list',
        name: 'sp_list',
        component: sp_list,
        meta: { title: '商品列表' }
    },
    {
        path: '/detalis',
        name: 'detalis',
        component: detalis,
        meta: { title: '商品详情' }
    }
]


const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.meta.title) { //如果有值
        document.title = to.meta.title
    }
    next()
})


export default router