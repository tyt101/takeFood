/* eslint-disable indent */
/* eslint-disable eol-last */
// 接口请求模块

import ajax from './ajax'
const BASE_URL = '/api'
export const reqAddress = (geohash) => ajax(`${BASE_URL}/position/${geohash}`)

export const reqFoodCategorys = () => ajax(BASE_URL + '/index_category')

export const reqShop = (latitude, longitude) => ajax(BASE_URL + '/shops', { latitude, longitude })

export const reqSearchShop = (keyword, geohash) => ajax(BASE_URL + '/search_shops', { keyword, geohash })

export const reqPwdLogin = ({ name, pwd, captcha }) => ajax(BASE_URL + '/login_pwd', { name, pwd, captcha }, 'POST')

export const reqSendCode = (phone) => ajax(BASE_URL + '/sendcode', { phone })

export const reqSmsLogin = (phone, code) => ajax(BASE_URL + '/login_sms', { phone, code }, 'POST')

export const reqUserInfo = () => ajax(BASE_URL + '/userinfo')

export const reqLogout = () => ajax(BASE_URL + '/logout')

// mockServer里面mock的数据
export const reqShopInfo = () => ajax('/info')

export const reqShopGoods = () => ajax('/goods')

export const reqShopRatings = () => ajax('/ratings')