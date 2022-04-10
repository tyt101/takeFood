/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import {
    RECEOVE_ADDRESS,
    RECEOVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RECEIVE_SHOP_INFO,
    RECEIVE_SHOP_GOODS,
    RECEIVE_SHOP_RATINGS
} from './mutation-type'
export default {
    [RECEOVE_ADDRESS](state, { address }) {
        state.address = address
    },
    [RECEOVE_CATEGORYS](state, { categorys }) {
        state.categorys = categorys
    },
    [RECEIVE_SHOPS](state, { shops }) {
        state.shops = shops
    },
    [RECEIVE_USERINFO](state, { userInfo }) {
        state.userInfo = userInfo
    },
    cancelLogin(state) {
        state.userInfo = {}
    },
    [RECEIVE_SHOP_INFO](state, info) {
        console.log(info)
        state.info = info
    },
    [RECEIVE_SHOP_GOODS](state, goods) {
        state.goods = goods
    },
    [RECEIVE_SHOP_RATINGS](state, ratings) {
        state.ratings = ratings
    }
}