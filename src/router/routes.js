import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../project/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'main'
    },
  },
  {
    path: '/about',
    name: 'About',
    meta: {
      layout: 'main'
    },
    component: () => import('@/project/pages/about/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
