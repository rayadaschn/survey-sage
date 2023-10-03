import { message } from 'antd'
import axios from 'axios'
import { API_BASE_URL } from '@/constant'

const instance = axios.create({
  timeout: 10 * 1000,
  baseURL: API_BASE_URL,
})

/** 统一拦截 */
instance.interceptors.response.use((res) => {
  const resData = (res.data || {}) as ResType
  const { errno, data, msg } = resData

  if (errno !== 0) {
    // 错误提示
    if (msg) message.error(msg)
    throw new Error(msg)
  }

  return data as any
})

export default instance

export type ResType = {
  errno: number
  data?: ResDataType
  msg?: string
}

export type ResDataType = {
  [key: string]: any
}
