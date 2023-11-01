import { LeftOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import React, { FC } from 'react'
import HeaderToolbar from './HeaderToolbar'
import HeaderTitle from './HeaderTitle'
import HeaderButton from './HeaderButton'

/** 编辑器头部 */
const EditHeader: FC = () => {
  const nav = useNavigate()

  return (
    <div className="mx-6 flex border-b border-green-300 bg-white py-4">
      <div className="flex-1">
        <Space>
          <Button type="link" icon={<LeftOutlined />} onClick={() => nav(-1)}>
            返回
          </Button>
          <div className="mb-0 text-[18px] leading-none">
            <HeaderTitle />
          </div>
        </Space>
      </div>

      <div className="flex-1 text-center leading-[2]">
        <HeaderToolbar />
      </div>

      <div className="mr-3 flex-1 text-right leading-[2]">
        <HeaderButton />
      </div>
    </div>
  )
}

export default EditHeader
