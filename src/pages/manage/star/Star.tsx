import React, { FC } from 'react'
import styles from './Star.module.less'
import QuestionCard from '@/components/QuestionCard'
import { useSearchParams } from 'react-router-dom'
import { Empty, Typography } from 'antd'

const { Title } = Typography

const rawQuestionList = [
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

const Star: FC = () => {
  const [questionList, setQuestionList] = useState(rawQuestionList)
  return (
    <>
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>星标问卷</Title>
        </div>
        <div className={styles.right}>(搜索)</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.map((item) => {
          const { id } = item
          return <QuestionCard key={id} {...item} />
        })}
      </div>
      <div className={styles.foot}>分页</div>
    </>
  )
}

export default Star
