/* eslint-disable indent */
/* eslint-disable eol-last */
import Vue from 'vue'
import VueRouter from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Search from '../pages/Search/Search.vue'
import Login from '../pages/Login/Login.vue'
import UserInfo from '../pages/UserInfo/UserInfo.vue'
import Shop from '../pages/Shop/Shop.vue'
import ShopGoods from '../pages/Shop/ShopGoods/ShopGoods.vue'
import ShopRatings from '../pages/Shop/ShopRatings/ShopRatings.vue'
import ShopInfos from '../pages/Shop/ShopInfos/ShopInfos.vue'
Vue.use(VueRouter)
export default new VueRouter({
    routes: [{
        path: '/',
        redirect: '/msite'
    }, {
        path: '/msite',
        component: MSite,
        meta: {
            showFooter: true
        }
    }, {
        path: '/order',
        component: Order,
        meta: {
            showFooter: true
        }
    }, {
        path: '/profile',
        component: Profile,
        meta: {
            showFooter: true
        }
    }, {
        path: '/search',
        component: Search,
        meta: {
            showFooter: true
        }
    }, {
        path: '/login',
        component: Login
    }, {
        path: '/userinfo',
        component: UserInfo
    }, {
        path: '/shop',
        component: Shop,
        redirect: '/shop/goods',
        children: [{
            path: '/shop/goods',
            component: ShopGoods
        }, {
            path: '/shop/ratings',
            component: ShopRatings
        }, {
            path: '/shop/infos',
            component: ShopInfos
        }]
    }]
})