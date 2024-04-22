// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/OrderBook/OrderBook.vue'),
  },
  {
    path: '/orderbook',
    component: () => import('@/components/OrderBook/OrderBook.vue'),
  },
  {
    path: '/settings',
    component: () => import('@/components/Settings/Settings.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
