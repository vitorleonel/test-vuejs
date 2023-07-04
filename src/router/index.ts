import { createRouter, createWebHistory } from 'vue-router'

const HomeView = () => import('@/views/HomeView.vue')
const ShopView = () => import('@/views/ShopView.vue')
const AboutView = () => import('@/views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/shop',
      component: ShopView
    },
    {
      path: '/about',
      component: AboutView
    }
  ]
})

export default router
