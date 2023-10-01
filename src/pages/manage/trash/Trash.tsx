import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import { Empty, Table, Typography, Tag, Space, Button, Modal } from 'antd'
import styles from './Trash.module.less'
import { ExclamationCircleOutlined } from '@ant-design/icons'

const { Title } = Typography
const { confirm } = Modal
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

const Trash: FC = () => {
  useTitle('问卷调查')

  const [questionList] = useState(rawQuestionList)
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
      dataIndex: 'answerContent',
    },
    {
      title: '创建时间',
      dataIndex: 'currentAt',
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
      <div className={styles.header}>
        <div className={styles.left}>
          <Title level={3}>回收站</Title>
        </div>
        <div className={styles.right}>(搜索) {JSON.stringify(selectedIds)}</div>
      </div>
      <div className={styles.content}>
        {questionList.length === 0 && <Empty description="暂无数据" />}
        {questionList.length > 0 && (
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
              rowKey={(q) => q.id}
              dataSource={questionList}
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
