// 当前环境模式
export const ENV_MODE = import.meta.env.MODE

// 接口的网关域名
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL

// 主题管理
export const APP_DEFAULT_THEME = import.meta.env.VITE_APP_DEFAULT_THEME

// 产品名称
export const APP_NAME = import.meta.env.VITE_APP_NAME

// 网站首页标题
export const APP_TITLE = import.meta.env.VITE_APP_TITLE

// 网站描述
export const APP_DESC = import.meta.env.VITE_APP_DESC

// 网站描述
export const APP_KEYWORDS = import.meta.env.VITE_APP_KEYWORDS

// 本地存储前缀
export const STORAGE_PREFIX = import.meta.env.VITE_STORAGE_PREFIX

// * 路由白名单地址（必须是本地存在的路由 staticRouter.ts）
export const ROUTER_WHITE_LIST: string[] = ['/404']

// 常量
export const LIST_SEARCH_PARAM_KEY = 'keyword'
export const LIST_PAGE_PARAM_KEY = 'page'
export const LIST_PAGE_SIZE_PARAM_KEY = 'pageSize'

export const LIST_PAGE_SIZE = 10 // 默认的 pageSize
export const STAT_PAGE_SIZE = 10 // 统计列表，默认的 pageSize

export const STAT_COLORS = [
  '#FF2D2D',
  '#BE77FF',
  '#2894FF',
  '#00EC00',
  '#EAC100',
  '#FF9D6F',
]
