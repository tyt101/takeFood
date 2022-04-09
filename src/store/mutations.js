/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import {
    RECEOVE_ADDRESS,
    RECEOVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO
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
    }
}