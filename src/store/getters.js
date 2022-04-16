/* eslint-disable space-before-function-paren */
/* eslint-disable eol-last */
/* eslint-disable indent */
export default {

    totalCount(state) {
        return state.cartFoods.reduce((preTotal, food) => {
            console.log('totalCount')
            console.log('preTotal    ' + preTotal)
            console.log('count  ' + food.count)
            return preTotal + food.count
        }, 0)
    },
    totalPrice(state) {
        return state.cartFoods.reduce((preTotal, food) => {
            console.log('totalPrice')
            console.log('preTotal   ' + preTotal)
            console.log('price   ' + food.price)
            return preTotal + food.count * food.price
        }, 0)
    }
}