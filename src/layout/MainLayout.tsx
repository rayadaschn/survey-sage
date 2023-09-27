import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
  return (
    <>
      <div>MainLayout header</div>
      <div className="b-black-0.2 font[900]">测试 unocss</div>
      <div>
        <Outlet />
      </div>
      <div>MainLayout footer</div>
    </>
  )
}

export default MainLayout
