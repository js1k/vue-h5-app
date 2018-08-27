import Vue from 'vue'
import Router from 'vue-router'

const editInfo = r => require.ensure([], () => r(require('@/pages/editInfo/editInfo')), 'editInfo')
const baseInfo = r => require.ensure([], () => r(require('@/pages/editInfo/baseInfo')), 'baseInfo')
const personalExper = r => require.ensure([], () => r(require('@/pages/editInfo/personalExperience')), 'personalExper')
const eduactionExper = r => require.ensure([], () => r(require('@/pages/editInfo/eduExperience')), 'eduactionExper')
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
    },
    {
        path: 'eduactionExper',
        name: 'eduactionExper',
        component: eduactionExper
    }
    ]
})
