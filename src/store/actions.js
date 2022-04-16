/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable indent */
import {
    RECEOVE_ADDRESS,
    RECEOVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USERINFO,
    RECEIVE_SHOP_INFO,
    RECEIVE_SHOP_GOODS,
    RECEIVE_SHOP_RATINGS,
    INCREASE_FOOD_COUNT,
    DECREASE_FOOD_COUNT,
    CLEAR_CART
} from './mutation-type'
import {
    reqAddress,
    reqFoodCategorys,
    reqShop,
    reqUserInfo,
    reqShopInfo,
    reqShopGoods,
    reqShopRatings
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
    },
    async getShopInfo({ commit }) {
        const result = await reqShopInfo()
        if (result.code === 0) {
            commit(RECEIVE_SHOP_INFO, result.data)
        }
    },
    async getShopGoods({ commit }, callback) {
        const result = await reqShopGoods()
        if (result.code === 0) {
            commit(RECEIVE_SHOP_GOODS, result.data)
        }
        callback && callback()
    },
    async getShopRatings({ commit }) {
        const result = await reqShopRatings()
        if (result.code === 0) {
            commit(RECEIVE_SHOP_RATINGS, result.data)
        }
    },
    updateFoodCount({ commit }, { isAdd, food }) {
        if (isAdd) {
            commit(INCREASE_FOOD_COUNT, { food })
        } else {
            commit(DECREASE_FOOD_COUNT, { food })
        }
    },
    clearCart({ commit }) {
        commit(CLEAR_CART)
    }
}