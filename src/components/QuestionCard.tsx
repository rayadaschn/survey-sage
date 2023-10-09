import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button, Divider, Popconfirm, Space, Tag, Modal, message } from 'antd'
import {
  CopyOutlined,
  DeleteOutlined,
  EditOutlined,
  ExclamationCircleOutlined,
  LineChartOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { duplicateQuestionService, updateQuestionService } from '@/api'

type PropsType = {
  _id: string
  title: string
  isPublished: boolean
  isStar: boolean
  answerContent: number
  currentAt: string
}

const { confirm } = Modal

const QuestionCard: FC<PropsType> = (props: PropsType) => {
  const nav = useNavigate()
  const { _id, title, isPublished, answerContent, currentAt, isStar } = props

  /** 编辑 */
  const handleEdit = () => {
    nav(`/question/edit/${_id}`)
  }
  /** 数据统计 */
  const handleStat = () => {
    nav(`/question/stat/${_id}`)
  }

  /** 修改标星 */
  const [isStarState, setIsStarState] = useState(isStar)
  const { loading: changeStarLoading, run: changeStar } = useRequest(
    async () => {
      await updateQuestionService(_id, { isStar: !isStarState })
    },
    {
      manual: true,
      onSuccess() {
        setIsStarState(!isStarState)
        message.success('已更新')
      },
    },
  )

  /** 复制 */
  const { loading: duplicateLoading, run: duplicate } = useRequest(
    async () => await duplicateQuestionService(_id),
    {
      manual: true,
      onSuccess(result) {
        message.success('复制成功')
        nav(`/question/edit/${result.id}`) // 跳转到问卷编辑页
      },
    },
  )

  /** 删除 */
  const [isDeletedState, setIsDeletedState] = useState(false)
  const { loading: deleteLoading, run: deleteQuestion } = useRequest(
    async () => await updateQuestionService(_id, { isDeleted: true }),
    {
      manual: true,
      onSuccess() {
        message.success('删除成功')
        setIsDeletedState(true)
      },
    },
  )

  const del = () => {
    confirm({
      title: '确定删除该问卷?',
      icon: <ExclamationCircleOutlined />,
      onOk: deleteQuestion,
    })
  }

  // 已经删除的问卷，不要再渲染卡片了
  if (isDeletedState) return null

  return (
    <div className="mb-2.5 border-rounded bg-white p-3 transition-transform hover:scale-105 hover:transform hover:shadow-md">
      <div className="flex">
        <div className="flex-1">
          <Link
            to={isPublished ? `/question/stat/${_id}` : `/question/edit/${_id}`}
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
              onClick={changeStar}
              disabled={changeStarLoading}
            >
              {isStarState ? '取消标星' : '标星'}
            </Button>
            <Popconfirm
              title="确定复制该问卷?"
              okText="确认"
              cancelText="取消"
              onConfirm={duplicate}
            >
              <Button
                type="text"
                icon={<CopyOutlined />}
                color="#999"
                size="small"
                disabled={duplicateLoading}
              >
                复制
              </Button>
            </Popconfirm>

            <Button
              type="text"
              icon={<DeleteOutlined />}
              size="small"
              color="#999"
              onClick={del}
              disabled={deleteLoading}
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
