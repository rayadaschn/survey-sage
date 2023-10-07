import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Layout } from 'antd'
import Logo from '@/components/Logo'
import UserInfo from '@/components/UserInfo'

const { Header, Content, Footer } = Layout

const MainLayout: FC = () => {
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
        <Outlet />
      </Content>
      <Footer className="border-t border-gray-200 border-solid bg-white text-center">
        文件调查@2023 Created by Huy
      </Footer>
    </Layout>
  )
}

export default MainLayout
