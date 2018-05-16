/**
 * Created by lichun on 2017/5/10.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

// home  first tab
import Home from '~pages/home/home.vue'

const Login = () => import('~pages/Login' /* webpackChunkName: "chunks/Login" */)
// 6
const onlinePay = () => import('~pages/home/onlinePay/onlinePay.vue' /* webpackChunkName: "chunks/home/onlinePay/onlinePay" */)

Vue.use(VueRouter)
export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/home',
            component: Home,
            requiresAuth: true,
            children: [
                {
                    path: 'onlinePay',
                    component: onlinePay,
                    meta: { requireAuth: true }
                },
                {
                    path: '*',
                    redirect: '/home/xtManage/xtSet'
                }
            ]
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})
