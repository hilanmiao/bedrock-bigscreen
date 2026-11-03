import { createRouter, createWebHistory } from 'vue-router'

const componentPages = import.meta.glob('@/views/components/*/index.vue')
const componentRoutes = Object.entries(componentPages).map(([file, component]) => {
  const id = file.match(/\/components\/([^/]+)\/index\.vue$/)[1]
  return {
    path: '/components/' + id,
    name: id,
    component
  }
})

const routes = [
  {
    path: '/',
    name: 'overview',
    component: () => import('@/views/index.vue')
  },
  ...componentRoutes,
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/index.vue')
  },
  {
    path: '/icons-2',
    name: 'icons-2',
    component: () => import('@/views/icons2/index.vue')
  },
  {
    path: '/screens/energy',
    name: 'energy-screen',
    component: () => import('@/views/screens/energy/index.vue')
  },
  {
    path: '/screens/general',
    name: 'general-screen',
    component: () => import('@/views/screens/general/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

export default router
