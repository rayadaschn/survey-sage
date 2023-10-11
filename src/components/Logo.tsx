import React, { FC } from 'react'
// import { Link } from 'react-router-dom'
import { Space, Typography } from 'antd'
import { FormOutlined } from '@ant-design/icons'
import styles from './Logo.module.less'

const { Title } = Typography

const Logo: FC = () => {
  return (
    <div>
      <Link to="/">
        <Space className={styles.container}>
          <Title>
            <FormOutlined />
          </Title>
          <Title>问卷调查</Title>
        </Space>
      </Link>
    </div>
  )
}

export default Logo