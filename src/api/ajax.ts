import { message } from 'antd'
import axios from 'axios'
import { getToken } from '@/utils'
import type { AxiosError, AxiosResponse } from 'axios'
import { API_BASE_URL } from '@/constant'

/**
 * @description: 响应结果
 * @argument SUCCESS  请求成功
 * @argument EXPIRE   token请求失效或校验失败
 * @argument ERROR    请求错误
 * @argument TIMEOUT  请求超时
 * @argument TYPE     请求类型
 */
enum ResultEnum {
  SUCCESS = 200,
  EXPIRE = 203,
  ERROR = -1,
  ERRMESSAGE = '请求失败',
  TIMEOUT = 25000,
  TYPE = 'success',
}

const instance = axios.create({
  timeout: 10 * 1000,
  baseURL: API_BASE_URL,
})

/**
 * @description: 请求拦截器
 * @returns {*}
 */
instance.interceptors.request.use(
  (config) => {
    config.headers['Authorization'] = `Bearer ${getToken()}` // JWT 的固定格式
    return config
  },
  (error: AxiosError) => {
    message.error(error.message)
    return Promise.reject(error)
  },
)

/**
 * @description: 响应拦截器
 * @returns {*}
 */
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    const resData = (response.data || {}) as ResType
    const { errno, data, msg } = resData

    // * 登陆失效（code == 203）
    if (errno === ResultEnum.EXPIRE) {
      // TODO: 清除本地缓存
      message.error(msg || ResultEnum.ERRMESSAGE)
      // 返回登录页
      return Promise.reject(data)
    }

    if (errno !== 0 && errno !== ResultEnum.SUCCESS) {
      message.error(msg || ResultEnum.ERRMESSAGE)
      return Promise.reject(data)
    }
    return data as any
  },
  (error: AxiosError) => {
    // 处理 HTTP 网络错误
    let messageStr = ''
    // HTTP 状态码
    const status = error.response?.status
    switch (status) {
      case 401:
        messageStr = 'token 失效，请重新登录'
        break
      case 403:
        messageStr = '拒绝访问'
        break
      case 404:
        messageStr = '请求地址错误'
        break
      case 500:
        messageStr = '服务器故障'
        break
      default:
        messageStr = '网络连接故障'
    }

    message.error(messageStr)
    return Promise.reject(error)
  },
)

export default instance

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  [key: string]: any
}
