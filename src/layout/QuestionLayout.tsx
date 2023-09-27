import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout: FC = () => {
  return (
    <>
      <p>Question layout</p>
      <div>
        <Outlet />
      </div>
    </>
  )
}

export default MainLayout
