import React, { FC, useState } from 'react'
// import QuestionCard from '@/components/QuestionCard'
import styles from './List.module.less'
import QuestionCard from '@/components/QuestionCard'
// import { useSearchParams } from 'react-router-dom'
import { Typography } from 'antd'

const { Title } = Typography
const rawQuestionList = [
  {
    id: 'q1',
    title: '问卷 1',
    isPublished: false,
    isStar: false,
    answerContent: 9,
    currentAt: '1 月 1 日 12:45',
  },
  {
    id: 'q2',
    title: '问卷 2',
    isPublished: true,
    isStar: false,
    answerContent: 3,
    currentAt: '2 月 1 日 12:45',
  },
  {
    id: 'q3',
    title: '问卷 3',
    isPublished: false,
    isStar: true,
    answerContent: 1,
    currentAt: '3 月 1 日 12:45',
  },
  {
    id: 'q4',
    title: '问卷 4',
    isPublished: true,
    isStar: true,
    answerContent: 6,
    currentAt: '4 月 1 日 12:45',
  },
]

const List: FC = () => {
  // const [searchParams] = useSearchParams()
  const [questionList, setQuestionList] = useState(rawQuestionList)

  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>我的问卷</Title>
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
