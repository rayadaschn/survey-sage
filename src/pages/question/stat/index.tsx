import React, { FC } from 'react'
import { useGetPageInfo, useLoadQuestionData } from '@/hooks'
import StatLoading from './components/StatLoading'
import StatUnPubulished from './components/StatUnPubulished'

const Stat: FC = () => {
  const { loading, questionData } = useLoadQuestionData()
  const { title, isPubulished } = useGetPageInfo()

  // 修改标题
  useTitle(`问卷调查 - ${title}`)

  if (loading) return <StatLoading />

  if (isPubulished) return <StatUnPubulished />

  return (
    <div>
      <p>Stat</p>
      <p>{JSON.stringify(questionData)}</p>
    </div>
  )
}

export default Stat
