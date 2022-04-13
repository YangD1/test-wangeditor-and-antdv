import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const routersFiles = require.context('./routers', false, /\.js$/)

export const constantRoutes = []
routersFiles.keys().forEach(name => {
  constantRoutes.push(...routersFiles(name).default)
})


export const asyncRoutes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: '主页'
    },
  }
]

const allRouters = constantRoutes.concat(asyncRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes: allRouters,
})

export default router
