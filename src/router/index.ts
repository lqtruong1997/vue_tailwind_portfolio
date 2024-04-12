import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
      component: AppLayout,
      children: [
        {
          path: 'home',
          component: HomeView
        },{
          path: 'resume',
          component: () => import('../views/ResumeView.vue')
        },{
          path: 'works',
          component: () => import('../views/WorkView.vue')
        },{
          path: 'playground',
          component: () => import('../views/PlaygroundView.vue')
        },{
          path: 'contact',
          component: () => import('../views/ContactView.vue')
        },
        {
          path: '/:pathMatch(.*)*',
          redirect: '/resume'
        }
      ]
    }
  ]
})

export default router
