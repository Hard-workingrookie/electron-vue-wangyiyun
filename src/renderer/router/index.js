import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/Index'
import MvDetail from '@/views/MvDetail'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/MvDetail',
      name: 'MvDetail',
      component: MvDetail
    },
    
  ]
})
