import { Button, Result } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const StatUnPubulished: FC = () => {
  const nav = useNavigate()

  const goBack = () => nav(-1)

  return (
    <div className="flex-1">
      <Result
        status="warning"
        title="该页面尚未发布"
        extra={
          <Button type="primary" onClick={goBack}>
            返回
          </Button>
        }
      />
    </div>
  )
}

export default StatUnPubulished
