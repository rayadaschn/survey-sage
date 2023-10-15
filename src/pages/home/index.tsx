import { MANAGE_INDEX_PATHNAME } from '@/router'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Typography } from 'antd'

const { Title, Paragraph } = Typography

const Home: FC = () => {
  const nav = useNavigate()

  return (
    <div className="h-150 flex flex-col items-center justify-center">
      <div className="text-center">
        <Title>问卷调查 | 在线投票</Title>
        <Paragraph>
          已经累计创建问卷 500 份，发布问卷 80 份，收到答卷 2000 份
        </Paragraph>
        <div className="h-15 font-24">
          <Button
            className="b-rounded-4"
            type="primary"
            onClick={() => nav(MANAGE_INDEX_PATHNAME)}
          >
            开始使用
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Home
