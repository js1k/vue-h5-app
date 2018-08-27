// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/common.scss'
import {
    AlertPlugin,
    ToastPlugin
} from 'vux'
// import 'lib-flexible'
Vue.config.productionTip = false
Vue.use(
    AlertPlugin,
    ToastPlugin)
new Vue({
    el: '#app',
    router,
    components: {
        App
    },
    template: '<App/>'
})
