import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const editInfo = r => require.ensure([], () => r(require('@/pages/editInfo/editInfo')), 'editInfo');
const baseInfo = r => require.ensure([], () => r(require('@/pages/editInfo/baseInfo')), 'baseInfo');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editInfo',
      name: 'editInfo',
      component: editInfo
    },
    {
      path: '/baseInfo',
      name: 'baseInfo',
      component: baseInfo
    }
  ]
})
