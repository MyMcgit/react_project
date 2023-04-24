/**
 项目中所有请求由该文件发出
 以后每当发请求之前，都要在该文件里添加一个真正发送请求的方法
 */
import myaxios from "./myAxios"
import { BASE_URL } from '../config'
import { BASE_URL_WEATHER , CITY,WEATHER_AK } from "../config"


// 登录请求
export const reqLogin = (values) => {
    return myaxios.post(BASE_URL +'/api1/login', values)
}

// 获取商品列表请求
export const reqCategoryList = () => myaxios.get(`/api1/manage/category/list`)
// 天气请求
export const reqweather = ()=>myaxios.get(BASE_URL_WEATHER+`/api2/v3/weather/weatherInfo?city=${CITY}&key=${WEATHER_AK}`)
// 新增商品分类
export const reqAddCategory = ({categoryname})=> myaxios.post(BASE_URL +'/api1/manage/category/add', {categoryname:categoryname.trim()})
// 修改商品分类
export const reqUpdateCategory = ({categoryid,categoryname})=> myaxios.post(BASE_URL +'/api1/manage/category/update', {categoryid,categoryname:categoryname.trim()})