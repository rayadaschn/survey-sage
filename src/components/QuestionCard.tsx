import React, { FC } from 'react'
import styles from './QuestionCard.module.less'
import { Link } from 'react-router-dom'
import { Button, Divider, Popconfirm, Space, Tag, Modal, message } from 'antd'
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExceptionOutlined,
  LineChartOutlined,
  StarOutlined,
} from '@ant-design/icons'

type PropsType = {
  id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerContent: number
  currentAt: string
}

const { confirm } = Modal

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const { id, title, isPublished, answerContent, currentAt, isStar } = props
  const onHandleCopy = () => console.log('点击复制')
  const onHandleDel = () => {
    confirm({
      title: '确定删除该问卷?',
      icon: <ExceptionOutlined />,
      onOk: () => message.success('删除'),
    })
  }

  const nav = useNavigate()
  const handleEdit = () => {
    nav(`/question/edit/${id}`)
  }
  const handleStat = () => {
    nav(`/question/stat/${id}`)
  }

  return (
    <div className="mb-2.5 border-rounded bg-white p-3 transition-transform hover:scale-105 hover:transform hover:shadow-md">
      <div className="flex">
        <div className="flex-1">
          <Link
            to={isPublished ? `/question/stat/${id}` : `/question/edit/${id}`}
          >
            <Space>
              {isStar && <StarOutlined style={{ color: 'red' }} />}
              {title}
            </Space>
          </Link>
        </div>

        <div className="flex-1 text-center font-size-3">
          <Space>
            {isPublished ? (
              <Tag color="processing">已发布</Tag>
            ) : (
              <Tag>未发布</Tag>
            )}
            <span>答卷: {answerContent}</span>
            <span>{currentAt}</span>
          </Space>
        </div>
      </div>

      <Divider className="m-3" />

      <div className="flex">
        <div className="flex-1">
          <Space>
            <Button
              icon={<EditOutlined />}
              type="text"
              size="small"
              onClick={handleEdit}
            >
              编辑问卷
            </Button>
            <Button
              icon={<LineChartOutlined />}
              type="text"
              size="small"
              onClick={handleStat}
            >
              数据统计
            </Button>
          </Space>
        </div>
        <div className="flex-1 text-center">
          <Space>
            <Button
              type="text"
              icon={<StarOutlined />}
              color="#999"
              size="small"
            >
              标星
            </Button>
            <Popconfirm
              title="确定复制该问卷?"
              okText="确认"
              cancelText="取消"
              onConfirm={onHandleCopy}
            >
              <Button
                type="text"
                icon={<CopyOutlined />}
                color="#999"
                size="small"
              >
                复制
              </Button>
            </Popconfirm>

            <Button
              type="text"
              icon={<DeleteOutlined />}
              size="small"
              color="#999"
              onClick={onHandleDel}
            >
              删除
            </Button>
          </Space>
        </div>
      </div>
    </div>
  )
}

export default QuestionCard
