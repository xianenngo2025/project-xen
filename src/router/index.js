import { createRouter, createWebHistory } from 'vue-router'

import CompareView from '../views/CompareView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: CompareView,
    },
  ],
})

export default router