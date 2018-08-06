import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRouterMap = [
  { path: '/', component: () => import('@/views/index'), hidden: true },
  { path: '/analysisReport', component: () => import('@/views/analysisReport/index'), hidden: true },
  { path: '/creditReport', component: () => import('@/views/creditReport/index'), hidden: true },
  { path: '/searchReport', component: () => import('@/views/searchReport/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  routes: constantRouterMap
})

