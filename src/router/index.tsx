import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layout/MainLayout'
import ManageLayout from '../layout/ManageLayout'
import QuestionLayout from '../layout/QuestionLayout'
import Register from '@/pages/register'
import NotFound from '@/pages/NotFound'
import List from '@/pages/manage/list'
import Trash from '@/pages/manage/trash'
import Star from '@/pages/manage/star'
import Home from '@/pages/home'
import Login from '@/pages/login/Login'

// 路由懒加载
const Edit = lazy(() => import('@/pages/question/edit'))
const Stat = lazy(() => import('@/pages/question/stat'))

/** 路由对照表 */
const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'register',
          element: <Register />,
        },
        {
          path: 'manage',
          element: <ManageLayout />,
          children: [
            {
              path: 'list',
              element: <List />,
            },
            {
              path: 'star',
              element: <Star />,
            },
            {
              path: 'trash',
              element: <Trash />,
            },
          ],
        },

        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
    {
      path: 'question',
      element: <QuestionLayout />,
      children: [
        {
          path: 'edit/:id', // 编辑页
          element: <Edit />,
        },
        {
          path: 'stat/:id', // statistics 统计
          element: <Stat />,
        },
      ],
    },
  ],
  { basename: '/survey-sage' },
)

export default router

/** 常用路由常量 */
export const HOME_PATHNAME = '/'
export const LOGIN_PATHNAME = '/login'
export const REGISTER_PATHNAME = '/register'
export const MANAGE_INDEX_PATHNAME = '/manage/list'

/** 区分登录页和注册页 */
export function isLoginOrRegister(pathname: string) {
  return [LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)
}

/** 判断是否需要用户信息 */
export function isNoNeedUserInfo(pathname: string) {
  return [HOME_PATHNAME, LOGIN_PATHNAME, REGISTER_PATHNAME].includes(pathname)
}
