/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable indent */
export default {

    totalCount(state) {
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count, 0)
    },
    totalPrice(state) {
        return state.cartFoods.reduce((preTotal, food) => preTotal + food.count * food.price, 0)
    }
}