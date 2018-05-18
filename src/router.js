/**
 * Created
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

/* Layout */
import Layout from '~/pages/layout/Layout'

const Login = () =>
import
('~pages/Login' /* webpackChunkName: "chunks/Login" */)
// 404  ok
const page_404 = () =>
import
('~/pages/404.vue' /* webpackChunkName: "chunks/page404" */)

const DashBoard_index = () =>
import
('~/pages/dashboard/index' /* webpackChunkName: "chunks/dashboard/index" */)

// betblock 相关的东西
const bb_withdraw = () =>
import
('~/pages/betblock/withdraw')

// admin page
const t_adminCenter = () =>
import
('~/pages/adminPage/adminCenter')


Vue.use(VueRouter)
export default new VueRouter({
	mode: 'hash',
	routes: [
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
			path: '/adminPage',
			component: Layout,
			redirect: '/adminPage/adminCenter',
			name: 'adminPage',
			meta: {title: 'adminPage', icon: 'example'},
			children: [
				{
					path: 'adminCenter',
					name: 'adminCenter',
					component: t_adminCenter,
					meta: {title: '店铺管理', icon: 'form'}
				},
				{
					path: 'tree',
					name: 'more',
					component: bb_withdraw,
					meta: {title: 'more', icon: 'user'}
				}
			]
		},
		{
			path: '/betblock',
			component: Layout,
			redirect: '/betblock/withdraw',
			name: 'demo',
			meta: {title: 'demo', icon: 'user'},
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
