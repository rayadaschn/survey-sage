import { useGetComponentInfo } from '@/hooks'
import { FileTextOutlined, SettingOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import RightComponentProp from './RightComponentProp'
import { Tabs } from 'antd'

// TS 枚举
enum TAB_KEYS {
  PROP_KEY = 'prop',
  SETTING_KEY = 'setting',
}

const EditRightPanel: FC = () => {
  const [activeKey, setActiveKey] = useState(TAB_KEYS.PROP_KEY)
  const { selectedId } = useGetComponentInfo()

  useEffect(() => {
    if (selectedId) setActiveKey(TAB_KEYS.PROP_KEY)
    else setActiveKey(TAB_KEYS.SETTING_KEY)
  }, [selectedId])

  const tabsItems = [
    {
      key: TAB_KEYS.PROP_KEY,
      label: (
        <span>
          <FileTextOutlined />
          属性
        </span>
      ),
      children: <RightComponentProp />,
    },
    {
      key: TAB_KEYS.SETTING_KEY,
      label: (
        <span>
          <SettingOutlined />
          页面设置
        </span>
      ),
      children: <div>页面设置</div>,
    },
  ]
  return <Tabs activeKey={activeKey} items={tabsItems} />
}

export default EditRightPanel
