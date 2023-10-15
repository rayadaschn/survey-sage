import React, { FC } from 'react'
import { useTitle } from 'ahooks'
import {
  Empty,
  Table,
  Typography,
  Tag,
  Space,
  Button,
  Modal,
  Spin,
  message,
} from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
import ListSearch from '@/components/ListSearch'
import ListPage from '@/components/ListPage'
import { useLoadQuestionListData } from '@/hooks'
import { deleteQuestionsService, updateQuestionService } from '@/api'

const { Title } = Typography
const { confirm } = Modal

const Trash: FC = () => {
  useTitle('问卷调查')

  const {
    data = {},
    loading,
    refresh,
  } = useLoadQuestionListData({ isDeleted: true })
  const { list = [], total = 0 } = data

  // 记录选中的 id
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

  /** 恢复 */
  const { run: recover } = useRequest(
    async () => {
      // 异步循环, 确保在处理下一个 selectedIds 元素之前，当前元素的更新操作已经完成
      for await (const id of selectedIds) {
        await updateQuestionService(id, { isDeleted: false })
      }
    },
    {
      manual: true,
      debounceWait: 500, // 防抖
      onSuccess() {
        message.success('恢复成功')
        refresh() // 手动刷新列表
        setSelectedIds([])
      },
    },
  )

  /** 删除 */
  const { run: deleteQuestion } = useRequest(
    async () => await deleteQuestionsService(selectedIds),
    {
      manual: true,
      onSuccess() {
        message.success('删除成功')
        refresh()
        setSelectedIds([])
      },
    },
  )

  const del = () => {
    confirm({
      title: '确定彻底删除该问卷?',
      icon: <ExclamationCircleOutlined />,
      content: '删除以后不可撤回',
      onOk: deleteQuestion,
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
              <Button
                type="primary"
                disabled={selectedIds.length === 0}
                onClick={recover}
              >
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
      <div className="text-center color-blue">
        {list.length > 0 && <ListPage total={total} />}
      </div>
    </>
  )
}

export default Trash
