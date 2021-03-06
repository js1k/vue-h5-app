// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/common.scss'
import {
    TransferDom,
    XTextarea,
    Popup,
    XInput,
    Group,
    XButton,
    Cell,
    Selector,
    Datetime,
    PopupPicker,
    XAddress,
    XSwitch,
    Value2nameFilter as value2name
} from 'vux'
// import 'lib-flexible'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    directives: {
        TransferDom
    },
    components: {
        App,
        XInput,
        XTextarea,
        Group,
        XButton,
        Cell,
        Selector,
        Datetime,
        PopupPicker,
        XAddress,
        XSwitch,
        Popup
    },
    template: '<App/>'
})
