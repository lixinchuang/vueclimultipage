/*
 * @Descripttion: 
 * @Author: jiansheng
 * @Date: 2019-10-11 13:05:27
 * @LastEditTime: 2020-03-09 09:04:34
 */
import axios from 'axios';
 
import ipConfig from '@/config/index';


 

// 创建axios实例 --- for java 后端环境
const service = axios.create({
    baseURL: ipConfig.HOST, // api的base_url
    timeout: 15000, // 请求超时时间
    withCredentials: false
});

// request interceptor
service.interceptors.request.use(
    config => {
        // if (getToken('Admin-TokenJ')) {
        //     config.headers.Authorization = getToken('Admin-TokenJ');
        //     config.headers.token = getToken('Admin-TokenJ')
        // }
        config.url=config.url+"?t="+new Date().getMilliseconds()
        return config;
    },
    error => {
        // Do something with request error
        console.log('request error:', error); // for debug
        Promise.reject(error);
    }
);

// respone interceptor
service.interceptors.response.use(
    response => {
        const res = response.data;
        // if (res.status == -200) {
        //     router.replace({ path: '/error?msg=' + res.msg });
        // }
        // if (res.status == -201) {
        //     router.replace({ path: '/error?msg=' + res.msg });
        // }
        return response.data;
    },
    error => {
        console.log('response error:' + error); // for debug
       // if (error.message.includes('timeout')) {
            // Message({
            //     message: '网络请求超时！',
            //     type: 'error',
            //     duration: 10 * 1000
            // })
      //  }
        // if (count == 0) {
        //     Message({
        //         message: '请检查网络情况',
        //         type: 'error',
        //         duration: 10 * 1000
        //     });
        // }
       //      count++
        return Promise.reject(error);
    }
);

export default service;

/**
 * 不同接口请求方式的装配
 * @param apiUrl  接口地址
 * @param data  请求参数
 * @param method  请求方式
 * @returns {never}
 */
// export function ajaxAssign(apiUrl, data, method = 'get') {
   
//     const ajaxParam = {
//         url: apiUrl,
//         method: method
//     };
//     if(method=="deletepost"){
//         ajaxParam.method = "delete"
//     }
//     if (['get', 'delete'].includes(method)) {
//         ajaxParam.params = data;
//     } else if (['post', 'put','deletepost'].includes(method)) {
//         ajaxParam.data = data;
       
//     }
//     return service(ajaxParam);
// }
