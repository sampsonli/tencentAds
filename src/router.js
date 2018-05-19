/**
 * Created
 */

import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import('./pages/user/login.vue')



Vue.use(VueRouter)
export default new VueRouter({
	mode: 'hash',
	routes: [
		// {
		// 	path: '/',
		// 	component: Layout,
		// 	redirect: '/dashboard',
		// 	name: 'Dashboard',
		// 	hidden: true,
		// 	children: [{
		// 		path: 'dashboard',
		// 		component: DashBoard_index
		// 	}]
		// },
		{
			path: '/login',
			component: Login,
		},
		// {
		// 	path: '/404',
		// 	component: page_404,
		// 	hidden: true
		// },
		// {
		// 	path: '*',
		// 	redirect: '/login'
		// }
	]
})
