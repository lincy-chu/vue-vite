/**
 * Created by robin zhu on 2021/3/12
 */
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  timeout: 6000 // 请求超时时间
})

// request拦截器
service.interceptors.request.use(
  config => {
    config.headers['Content-Type'] = 'application/json'
    return config
  },
  error => {
    // Do something with request error
    Promise.reject(error).then(() => {})
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    const code = response.status
    if (code < 200 || code > 300) {
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  error => {
    return Promise.reject(error)
  }
)
export default service
