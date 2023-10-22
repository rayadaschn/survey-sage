import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import React, { FC } from 'react'
import LeftComponentLib from './LeftComponentLib'
import LeftLayers from './LeftLayers'

const EditLeftPanel: FC = () => {
  const tabsItems = [
    {
      key: 'componentLib',
      label: (
        <span>
          <AppstoreOutlined />
          组件库
        </span>
      ),
      children: <LeftComponentLib />,
    },
    {
      key: 'layers',
      label: (
        <span>
          <BarsOutlined />
          组件库
        </span>
      ),
      children: <LeftLayers />,
    },
  ]
  return (
    <>
      <Tabs items={tabsItems} defaultActiveKey="componentLib" />
    </>
  )
}

export default EditLeftPanel
