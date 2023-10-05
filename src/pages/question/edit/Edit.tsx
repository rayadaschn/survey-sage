import React, { FC } from 'react'
import { useLoadQuestionData } from '@/hooks'

const Edit: FC = () => {
  const { loading, questionData } = useLoadQuestionData()

  return (
    <div>
      <p>编辑</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(questionData)}</p>}
    </div>
  )
}

export default Edit
