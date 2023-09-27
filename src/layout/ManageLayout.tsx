import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import styles from './ManageLayout.module.less'

const MainLayout: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p>ManageLayout left</p>
        <button>创建问卷</button>
        <button>我的问卷</button>
        <button>星标问卷</button>
        <button>回收站</button>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
