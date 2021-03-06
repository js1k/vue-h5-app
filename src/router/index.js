import Vue from 'vue'
import Router from 'vue-router'

const editInfo = r => require.ensure([], () => r(require('@/pages/editInfo/editInfo')), 'editInfo')
const baseInfo = r => require.ensure([], () => r(require('@/pages/editInfo/baseInfo')), 'baseInfo')
const perExper = r => require.ensure([], () => r(require('@/pages/editInfo/perExperience')), 'perExper')
const eduExper = r => require.ensure([], () => r(require('@/pages/editInfo/eduExperience')), 'eduExper')
const workExper = r => require.ensure([], () => r(require('@/pages/editInfo/workExperience')), 'workExper')
const addHornor = r => require.ensure([], () => r(require('@/pages/editInfo/addHornor')), 'addHornor')
const careerLabel = r => require.ensure([], () => r(require('@/pages/editInfo/myLabel')), 'careerLabel')
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
        path: '/perExper',
        name: 'perExper',
        component: perExper
    },
    {
        path: '/eduExper',
        name: 'eduExper',
        component: eduExper
    },
    {
        path: '/workExper',
        name: 'workExper',
        component: workExper
    },
    {
        path: '/addHornor',
        name: 'addHornor',
        component: addHornor
    },
    {
        path: '/careerLabel',
        name: 'careerLabel',
        component: careerLabel
    }
    ]
})
