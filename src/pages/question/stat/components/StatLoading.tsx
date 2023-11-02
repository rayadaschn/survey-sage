import React, { FC } from 'react'
import { Spin } from 'antd'

/** 加载状态 */
const StatLoading: FC = () => {
  return (
    <div className="mt-15 text-center">
      <Spin />
    </div>
  )
}

export default StatLoading
