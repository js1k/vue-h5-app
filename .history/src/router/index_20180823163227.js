import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const editInfo = r => require.ensure([], () => r(require('@/components/editInfo/editInfo')), 'editInfo');
const baseInfo = r => require.ensure([], () => r(require('@/components/editInfo/baseInfo')), 'baseInfo');
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/editInfo',
      name: 'editInfo',
      component: editInfo
    }
  ]
})
