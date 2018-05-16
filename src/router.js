/**
 * Created by lichun on 2017/5/10.
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

// home  first tab
import Home from '~pages/home/home.vue'

/* Layout */
import Layout from '~/pages/layout/Layout'

const Login = () => import('~pages/Login' /* webpackChunkName: "chunks/Login" */)
// 6
const onlinePay = () => import('~pages/home/onlinePay/onlinePay.vue' /* webpackChunkName: "chunks/home/onlinePay/onlinePay" */)

// 404
const page_404 = () => import('~/pages/404.vue')

const DashBoard_index = () => import('~/pages/dashboard/index')

// betblock 相关的东西
const bb_withdraw = () => import('~/pages/betblock/withdraw')

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
                    meta: {requireAuth: true}
                }
            ]
        },
        {
            path: '/',
            component: Layout,
            redirect: '/dashboard',
            name: 'Dashboard',
            hidden: true,
            children: [{
                path: 'dashboard',
                component: DashBoard_index
            }]
        },
        {
            path: '/betblock',
            component: Layout,
            redirect: '/betblock/withdraw',
            name: 'BetBlock',
            meta: {title: 'BetBlock', icon: 'example'},
            children: [
                {
                    path: 'withdraw',
                    name: 'withdraw',
                    component: bb_withdraw,
                    meta: {title: '提款审核', icon: 'withdraw'}
                },
                {
                    path: 'tree',
                    name: 'more',
                    component: bb_withdraw,
                    meta: {title: 'more', icon: 'tree'}
                }
            ]
        },
        {
            path: '/login',
            component: Login,
            hidden: true
        },
        {
            path: '/404',
            component: page_404,
            hidden: true
        },
        {
            path: '*',
            redirect: '/login'
        }
    ]
})
