import React, { FC, useState } from 'react'
// import QuestionCard from '@/components/QuestionCard'
import styles from './List.module.less'
import QuestionCard from '@/components/QuestionCard'
import { useSearchParams } from 'react-router-dom'

const rawQuestionList = [
  {
    id: 'q1',
    title: '问卷 1',
    isPublished: false,
    isStart: false,
    answerContent: 9,
    currentAt: '1 月 1 日 12:45',
  },
  {
    id: 'q2',
    title: '问卷 2',
    isPublished: true,
    isStart: false,
    answerContent: 3,
    currentAt: '2 月 1 日 12:45',
  },
  {
    id: 'q3',
    title: '问卷 3',
    isPublished: false,
    isStart: true,
    answerContent: 1,
    currentAt: '3 月 1 日 12:45',
  },
  {
    id: 'q4',
    title: '问卷 4',
    isPublished: true,
    isStart: true,
    answerContent: 6,
    currentAt: '4 月 1 日 12:45',
  },
]

const List: FC = () => {
  const [searchParams] = useSearchParams()
  const [questionList, setQuestionList] = useState(rawQuestionList)
  console.log('searchParams', searchParams.get('keyword'))

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <h3>我的问卷</h3>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questionList.map((item) => {
          const { id } = item
          return <QuestionCard key={id} {...item} />
        })}
      </div>
      <div className={styles.foot}>footer</div>
    </>
  )
}

export default List
