import React, { FC } from 'react'
// import { Link } from 'react-router-dom'
import { Space } from 'antd'
import { FormOutlined } from '@ant-design/icons'

const Logo: FC = () => {
  return (
    <div>
      <Link to="/">
        <Space>
          <div className="text-7 color-white">
            <FormOutlined />
            <span>问卷调查</span>
          </div>
        </Space>
      </Link>
    </div>
  )
}

export default Logo
