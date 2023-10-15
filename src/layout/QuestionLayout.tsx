import { useLoadUserData, useNavPage } from '@/hooks'
import { Spin } from 'antd'
import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const QuestionLayout: FC = () => {
  // 加载用户信息
  const { waitingUserData } = useLoadUserData()
  // 路由守卫, 用户未登录, 跳转登录页
  useNavPage(waitingUserData)

  return (
    <div className="h-screen">
      {waitingUserData ? (
        <div className="mt-15 text-center">
          <Spin />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  )
}

export default QuestionLayout
