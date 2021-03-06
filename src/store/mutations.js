/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
import Vue from 'vue'
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
    },
    [INCREASE_FOOD_COUNT](state, { food }) {
        if (!food.count) {
            Vue.set(food, 'count', 1)
            state.cartFoods.push(food)
        } else {
            food.count++
        }
    },
    [DECREASE_FOOD_COUNT](state, { food }) {
        if (food.count) {
            food.count--
                if (food.count === 0) {
                    state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
                }
        }
    },
    [CLEAR_CART](state) {
        state.cartFoods.forEach(food => {
            food.count = 0
        })
        state.cartFoods = []
    }
}