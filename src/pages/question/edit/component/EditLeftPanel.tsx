import { AppstoreOutlined, BarsOutlined } from '@ant-design/icons'
import { Tabs } from 'antd'
import React, { FC } from 'react'
import EditLeftComponentLib from './EditLeftComponentLib'
import EditLeftLayers from './EditLeftLayers'

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
      children: <EditLeftComponentLib />,
    },
    {
      key: 'layers',
      label: (
        <span>
          <BarsOutlined />
          组件库
        </span>
      ),
      children: <EditLeftLayers />,
    },
  ]
  return (
    <>
      <Tabs items={tabsItems} defaultActiveKey="componentLib" />
    </>
  )
}

export default EditLeftPanel
