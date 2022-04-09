/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable indent */
import {
    RECEOVE_ADDRESS,
    RECEOVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO
} from './mutation-type'
import {
    reqAddress,
    reqFoodCategorys,
    reqShop,
    reqUserInfo
} from '../api'

export default {
    async getAddress({ commit, state }) {
        const geohash = state.latitude + ',' + state.longtitude
        const result = await reqAddress(geohash)
        if (result.code === 0) {
            const address = result.data
            commit(RECEOVE_ADDRESS, { address })
        }
    },
    async getCategorys({ commit, state }) {
        const result = await reqFoodCategorys()
        if (result.code === 0) {
            const categorys = result.data
            commit(RECEOVE_CATEGORYS, { categorys })
        }
    },
    async getShops({ commit, state }) {
        const result = await reqShop(state.latitude, state.longtitude)
        if (result.code === 0) {
            const shops = result.data
            commit(RECEIVE_SHOPS, { shops })
        }
    },
    reCordUserInfo({ commit }, userInfo) {
        commit(RECEIVE_USERINFO, { userInfo })
    },
    async getUserInfo({ commit }) {
        const result = await reqUserInfo()
        const userInfo = result.data
        commit(RECEIVE_USERINFO, { userInfo })
    }
}