import React, { FC } from 'react'
import { useGetPageInfo, useLoadQuestionData } from '@/hooks'
import StatLoading from './components/StatLoading'
import StatUnPubulished from './components/StatUnPubulished'
import StatHeader from './components/StatHeader'
import StatContainer from './components/StatContainer'

const Stat: FC = () => {
  const { loading, questionData } = useLoadQuestionData()
  const { title, isPubulished } = useGetPageInfo()

  // 修改标题
  useTitle(`问卷调查 - ${title}`)

  if (isPubulished) return <StatUnPubulished />

  return (
    <div className="min-h-screen flex flex-col bg-cyan">
      <StatHeader />
      <div className="flex-auto py-3">
        {loading && <StatLoading />}
        {!loading && <StatContainer />}
      </div>
    </div>
  )
}

export default Stat
