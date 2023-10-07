import React, { FC, useState } from 'react'
// import QuestionCard from '@/components/QuestionCard'
import QuestionCard from '@/components/QuestionCard'
import ListSearch from '@/components/ListSearch'
// import { useSearchParams } from 'react-router-dom'
import { Spin, Typography } from 'antd'
import { useLoadQuestionListData } from '@/hooks'

const { Title } = Typography
// const rawQuestionList = [
//   {
//     id: 'q1',
//     title: '问卷 1',
//     isPublished: false,
//     isStar: false,
//     answerContent: 9,
//     currentAt: '1 月 1 日 12:45',
//   },
//   {
//     id: 'q2',
//     title: '问卷 2',
//     isPublished: true,
//     isStar: false,
//     answerContent: 3,
//     currentAt: '2 月 1 日 12:45',
//   },
//   {
//     id: 'q3',
//     title: '问卷 3',
//     isPublished: false,
//     isStar: true,
//     answerContent: 1,
//     currentAt: '3 月 1 日 12:45',
//   },
//   {
//     id: 'q4',
//     title: '问卷 4',
//     isPublished: true,
//     isStar: true,
//     answerContent: 6,
//     currentAt: '4 月 1 日 12:45',
//   },
// ]

const List: FC = () => {
  // const [searchParams] = useSearchParams()
  // const [questionList, setQuestionList] = useState(rawQuestionList)

  const { data = {}, loading } = useLoadQuestionListData()
  const { list = [], total = 0 } = data

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <Title level={3}>我的问卷</Title>
        </div>
        <div className="flex-1 text-center">
          <ListSearch />
        </div>
      </div>
      <div className="mb-5">
        {/* 问卷列表 */}
        {/* {questionList.map((item) => {
          const { id } = item
          return <QuestionCard key={id} {...item} />
        })} */}

        {loading && (
          <div className="text-center">
            <Spin />
          </div>
        )}
        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className="color-blue">footer</div>
    </>
  )
}

export default List
