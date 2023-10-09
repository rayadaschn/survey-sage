import React from 'react'
import { createBrowserRouter } from 'react-router-dom'

import MainLayout from '../layout/MainLayout'
import ManageLayout from '../layout/ManageLayout'
import QuestionLayout from '../layout/QuestionLayout'
import Register from '@/pages/register/Register'
import NotFound from '@/pages/NotFound/NotFound'
import List from '@/pages/manage/list/List'
import Trash from '@/pages/manage/trash/Trash'
import Star from '@/pages/manage/star/Star'
import Edit from '@/pages/question/edit/Edit'
import Stat from '@/pages/question/stat/Stat'
import Home from '@/pages/home/Home'
import Login from '@/pages/login/Login'

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