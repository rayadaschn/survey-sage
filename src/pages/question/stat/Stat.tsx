import React, { FC } from 'react'
import useLoadQuestionData from '@/hooks/useLoadQuestionData'

const Edit: FC = () => {
  const { loading, questionData } = useLoadQuestionData()

  return (
    <div>
      <p>Stat</p>
      {loading ? <p>loading</p> : <p>{JSON.stringify(questionData)}</p>}
    </div>
  )
}

export default Edit
