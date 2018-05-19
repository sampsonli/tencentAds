/**
 * Created
 */

import Vue from 'vue'
import VueRouter from 'vue-router'



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
			hidden: true
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
