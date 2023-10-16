import { LeftOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import React, { FC } from 'react'

const EditHeader: FC = () => {
  const nav = useNavigate()

  return (
    <div className="mx-6 flex border-b border-green-300 bg-white">
      <div className="flex-1">
        <Space>
          <Button type="link" icon={<LeftOutlined />}>
            返回
          </Button>
          <div className="mb-0 text-[18px] leading-none">标题</div>
        </Space>
      </div>
      <div className="flex-1 text-center">中部</div>
      <div className="flex-1 text-center">右侧</div>
    </div>
  )
}

export default EditHeader
