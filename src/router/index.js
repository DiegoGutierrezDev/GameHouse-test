import { createRouter, createWebHistory } from 'vue-router'
import AppRegisterLayout from '../views/layouts/AppRegisterLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registerStep1',
      component: () => import('../views/layouts/AppRegisterLayout.vue'),
      meta: {
        layout: AppRegisterLayout,
      },
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
