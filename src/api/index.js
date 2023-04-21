/**
 项目中所有请求由该文件发出
 以后每当发请求之前，都要在该文件里添加一个真正发送请求的方法
 */
import axios from "./myAxios"
import { BASE_URL } from '../config'
import { BASE_URL_WEATHER , CITY,WEATHER_AK } from "../config"


// 登录请求
export const reqLogin = (values) => {
    return axios.post(BASE_URL +'/api1/login', values)
}

// 获取商品列表请求
// export const reqCategoryList = () => axios.get(`/api1/manage/category/list`)

export const reqweather = ()=>axios.get(BASE_URL_WEATHER+`/api2/v3/weather/weatherInfo?city=${CITY}&key=${WEATHER_AK}`)