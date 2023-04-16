import axios from "axios";
import { message } from 'antd'
import NProgress from "nprogress";
import 'nprogress/nprogress.css'
// 为axios实例添加属性
const instance = axios.create({
    // 配置超时
    timeout: 4000
})

// 请求拦截器
instance.interceptors.request.use((config) => {
    // 在发送请求之前做些什么
    // 比如可以根据发送请求的方式method，来判断请求的参数是否需要进行转换
    NProgress.start()
    console.log(config.data);
    return config;
}, (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
});

//响应拦截器
instance.interceptors.response.use((response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    NProgress.done()
    return response.data;
}, (err) => {
    // 超出 2xx 范围的状态码都会触发该函数。比如：前端请求不到接口404
    // 对响应错误做点什么
    // 一般是前端的错误，很可能是请求地址写错了，此时应该检查代码，api地址等
    NProgress.done()
    message.error(err.message, 2)

    // 如果出错了，就返回一个暂停的promise实例
    return new Promise(() => {})

});

export default instance