import Vue from 'vue'
import Router from 'vue-router'

const editInfo = r => require.ensure([], () => r(require('@/pages/editInfo/editInfo')), 'editInfo')
const baseInfo = r => require.ensure([], () => r(require('@/pages/editInfo/baseInfo')), 'baseInfo')
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'editInfo',
        redirectTo: '/baseInfo'
    },
    {
        path: '/baseInfo',
        name: 'baseInfo',
        component: baseInfo
    },
    {
        path: '/baseInfo',
        name: 'baseInfo',
        component: baseInfo
    }
    ]
})
