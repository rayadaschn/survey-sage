import React, { FC } from 'react'
import styles from './QuestionCard.module.less'

type PropsType = {
  id: string
  title: string
  isPublished: boolean
  isStart: boolean
  answerContent: number
  currentAt: string
}

console.log('styles', styles)

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { id, title, isPublished, answerContent, currentAt } = props
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.left}>
          <a href="#">{title}</a>
        </div>

        <div className={styles.right}>
          {isPublished ? (
            <span style={{ color: 'green' }}>已发布</span>
          ) : (
            <span>未发布</span>
          )}
          &nbsp;
          <span>答卷: {answerContent}</span>
          &nbsp;
          <span>{currentAt}</span>
        </div>
      </div>

      <div className={styles['button-container']}>
        <div className={styles.left}>
          <button>编辑问卷</button>
          <button>数据统计</button>
        </div>
        <div className={styles.right}>
          <button>标星</button>
          <button>复制</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
