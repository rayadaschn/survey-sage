import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout, Spin } from 'antd'
import Logo from '@/components/Logo'
import UserInfo from '@/components/UserInfo'
import { useLoadUserData, useNavPage } from '@/hooks'

const { Header, Content, Footer } = Layout

const MainLayout: FC = () => {
  const { waitingUserData } = useLoadUserData()
  useNavPage(waitingUserData)

  return (
    <Layout>
      <Header className="px-6">
        <div className="float-left">
          <Logo />
        </div>
        MainLayout header
        <div className="float-right">
          <UserInfo />
        </div>
      </Header>
      <Content className="min-h-[calc(100vh-140px)]">
        {waitingUserData ? (
          <div className="mt-15 text-center">
            <Spin />
          </div>
        ) : (
          <Outlet />
        )}
      </Content>
      <Footer className="border-t border-gray-200 border-solid bg-white text-center">
        问卷调查 &copy;2025 - present. Created by Huy
      </Footer>
    </Layout>
  )
}

export default MainLayout
