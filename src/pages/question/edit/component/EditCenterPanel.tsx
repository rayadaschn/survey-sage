import { Spin } from 'antd'
import React, { FC } from 'react'

interface PropsType {
  loading: boolean
}
const EditCenterPanel: FC<PropsType> = ({ loading }) => {
  // 检测是否正在加载
  if (loading) {
    return (
      <div className="mt-6 text-center">
        <Spin />
      </div>
    )
  }
  return <>EditCenterPanel</>
}

export default EditCenterPanel
