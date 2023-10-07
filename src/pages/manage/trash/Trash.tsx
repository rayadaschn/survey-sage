import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import { Empty, Table, Typography, Tag, Space, Button, Modal, Spin } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import ListSearch from '@/components/ListSearch'
import { useLoadQuestionListData } from '@/hooks'

const { Title } = Typography
const { confirm } = Modal
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

const Trash: FC = () => {
  useTitle('问卷调查')

  // const [questionList] = useState(rawQuestionList)
  const { data = {}, loading } = useLoadQuestionListData({ isStar: true })
  const { list = [], total = 0 } = data

  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const tableColums = [
    {
      title: '标题',
      dataIndex: 'title',
    },
    {
      title: '是否发布',
      dataIndex: 'isPublished',
      render: (isPublished: boolean) => {
        return isPublished ? (
          <Tag color="processing">已发布</Tag>
        ) : (
          <Tag>未发布</Tag>
        )
      },
    },
    {
      title: '答卷',
      dataIndex: 'answerCount',
    },
    {
      title: '创建时间',
      dataIndex: 'createdAt',
    },
  ]

  const del = () => {
    confirm({
      title: '确定彻底删除该问卷?',
      icon: <ExclamationCircleOutlined />,
      content: '删除以后不可撤回',
      onOk: () => alert('删除'),
    })
  }

  return (
    <>
      <div className="flex">
        <div className="flex-1">
          <Title level={3}>回收站</Title>
        </div>
        <div className="flex-1 text-center">
          <ListSearch />
        </div>
      </div>
      <div className="mb-5">
        {/* 回收列表 */}
        {loading && (
          <div className="text-center">
            <Spin />
          </div>
        )}

        {!loading && list.length === 0 && <Empty description="暂无数据" />}

        {list.length > 0 && (
          <div>
            <Space className="mb">
              <Button type="primary" disabled={selectedIds.length === 0}>
                恢复
              </Button>
              <Button danger disabled={selectedIds.length === 0} onClick={del}>
                彻底删除
              </Button>
            </Space>
            <Table
              rowKey={(q) => q._id}
              dataSource={list}
              columns={tableColums}
              pagination={false}
              rowSelection={{
                type: 'checkbox',
                onChange: (selectedRowKeys) => {
                  setSelectedIds(selectedRowKeys as string[])
                },
              }}
            />
          </div>
        )}
      </div>
    </>
  )
}

export default Trash
