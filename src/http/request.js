import axios from 'axios'
import config from './config'
import Vue from 'vue'
let loadingCount = 0

const request = options => {
  const { $eventBus } = Vue.prototype
  if (loadingCount < 1) {
    $eventBus.$showMask()
  }
  loadingCount++
  return new Promise((resolve, reject) => {
    const instance = axios.create(config)
    // 添加请求拦截器
    instance.interceptors.request.use(function (config) {
      // 在发送请求之前做些什么
      return config;
    }, function (error) {
      // 对请求错误做些什么
      return Promise.reject(error);
    });

    // 添加响应拦截器
    instance.interceptors.response.use(function (response) {
      loadingCount--
      if (loadingCount < 1) {
        $eventBus.$closeMask()
      }
      // 对响应数据做点什么
      return response;
    }, function (error) {
      // 对响应错误做点什么
      return Promise.reject(error);
    });
    instance.request(options)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
export default request
