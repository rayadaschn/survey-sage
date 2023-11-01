import React, { FC } from 'react'
import { useGetPageInfo, useLoadQuestionData } from '@/hooks'
import { Spin } from 'antd'
import StatUnPubulished from './components/StatUnPubulished'

const Stat: FC = () => {
  const { loading, questionData } = useLoadQuestionData()
  const { isPubulished } = useGetPageInfo()

  if (loading) {
    return (
      <div className="mt-15 text-center">
        <Spin />
      </div>
    )
  }

  if (isPubulished) {
    return <StatUnPubulished />
  }

  return (
    <div>
      <p>Stat 统计调查</p>
      <p>{JSON.stringify(questionData)}</p>
    </div>
  )
}

export default Stat
