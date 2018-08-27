import Vue from 'vue'
import Router from 'vue-router'

const editInfo = r => require.ensure([], () => r(require('@/pages/editInfo/editInfo')), 'editInfo')
const baseInfo = r => require.ensure([], () => r(require('@/pages/editInfo/baseInfo')), 'baseInfo')
const personalExper = r => require.ensure([], () => r(require('@/pages/editInfo/personalExperiences')), 'personalExper')
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        redirect: '/editInfo'
    },
    {
        path: '/editInfo',
        name: 'editInfo',
        component: editInfo
    },
    {
        path: '/baseInfo',
        name: 'baseInfo',
        component: baseInfo
    },
    {
        path: '/personalExper',
        name: 'personalExper',
        component: personalExper
    }
    ]
})
