/* eslint-disable eol-last */
// 接口请求模块

import ajax from './ajax'

export const reqAddress = (geohash) => ajax(`/position/${geohash}`)

export const reqFoodTypes = () => ajax('/index_category')

export const reqShop = (latitude, longitude) => ajax('/shops', { latitude, longitude })