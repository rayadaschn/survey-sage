import React, { FC } from 'react'
import QuestionCard from '@/components/QuestionCard'
import ListSearch from '@/components/ListSearch'
import { useLoadQuestionListData } from '@/hooks'

// import { useSearchParams } from 'react-router-dom'
import { Empty, Spin, Typography } from 'antd'

const { Title } = Typography

// const rawQuestionList = [
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

const Star: FC = () => {
  // const [questionList] = useState(rawQuestionList)
  const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
  const { list = [], total = 0 } = data
  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <Title level={3}>星标问卷</Title>
        </div>
        <div className="flex-1 text-center">
          <ListSearch />
        </div>
      </div>
      <div className="mb-5">
        {/* 星标列表 */}
        {loading && (
          <div className="text-center">
            <Spin />
          </div>
        )}

        {!loading && list.length === 0 && <Empty description="暂无数据" />}

        {list.length > 0 &&
          list.map((q: any) => {
            const { _id } = q
            return <QuestionCard key={_id} {...q} />
          })}
      </div>
      <div className="color-blue">分页</div>
    </>
  )
}

export default Star
