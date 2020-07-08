import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/package/layout/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/to-pdf',
      name: 'ToPdf',
      component: () => import('@/package/toPdf/index')
    }
  ]
})
