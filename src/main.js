/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable no-new */
// 入口
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Button } from 'mint-ui'
Vue.component(Button.name, Button)
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})