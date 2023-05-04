/**
 项目中所有请求由该文件发出
 以后每当发请求之前，都要在该文件里添加一个真正发送请求的方法
 */
import myaxios from "./myAxios"
import { BASE_URL } from '../config'
import { BASE_URL_WEATHER , CITY,WEATHER_AK } from "../config"


// 登录请求
export const reqLogin = (values) => {return myaxios.post(BASE_URL +'/api1/login', values)}

// 获取商品分类列表请求
export const reqCategoryList = () => myaxios.get(`/api1/manage/category/list`)
// 天气请求
export const reqweather = ()=>myaxios.get(BASE_URL_WEATHER+`/api2/v3/weather/weatherInfo?city=${CITY}&key=${WEATHER_AK}`)
// 新增商品分类
export const reqAddCategory = ({categoryname})=> myaxios.post(BASE_URL +'/api1/manage/category/add', {categoryname:categoryname.trim()})
// 更新一个商品分类
export const reqUpdateCategory = ({categoryid,categoryname})=> myaxios.post(BASE_URL +'/api1/manage/category/update', {categoryid,categoryname:categoryname.trim()})
// 请求商品分页列表
export const reqProductList = (pageNum,pageSize) => myaxios.get(`/api1/manage/product/list`,{params:{pageNum,pageSize}})
// 请求商品更新状态
export const reqUPdateProdStatus = (productId,status) => myaxios.post(`/api1/manage/product/updateStatus`,{productId,status})
// 请求搜索商品
export const reqSearchProduct = (pageNum,pageSize,searchType,keyWord) => myaxios.get(`/api1/manage/product/search`,{params:{pageNum,pageSize,[searchType]:keyWord}})
// 根据商品id获取商品信息
export const reqProdById = (productId) => myaxios.get(`/api1/manage/product/info`,{params:{productId}})
// 请求删除图片（根据图片唯一名删除）
export const reqDeletePicture = (name) => myaxios.post(`/api1/manage/img/delete`,{name})
// 添加商品
export const reqAddProduct = (values) => myaxios.post(`/api1/manage/product/add`,{values})

