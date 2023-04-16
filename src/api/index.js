/**
 项目中所有请求由该文件发出
 以后每当发请求之前，都要在该文件里添加一个真正发送请求的方法
 */
import axios from "./myAxios"
import { BASE_URL } from '../config'
// 登录请求
export const reqLogin = (values) => {
    return axios.post(`${BASE_URL}/login`, values)
}