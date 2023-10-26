import { updateQuestionService } from '@/api'
import { useGetComponentInfo, useGetPageInfo } from '@/hooks'
import { LoadingOutlined } from '@ant-design/icons'
import { Button, Space, message } from 'antd'
import { FC } from 'react'

/** 保存按钮 */
const SaveButton: FC = () => {
  const { id } = useParams()
  const { componentList = [] } = useGetComponentInfo()
  const pageInfo = useGetPageInfo()

  /** 发送保存请求 */
  const { loading, run: save } = useRequest(
    async () => {
      if (!id) return
      await updateQuestionService(id, { ...pageInfo, componentList })
    },
    { manual: true },
  )

  /** 快捷键 */
  useKeyPress(['ctrl.s', 'meta.s'], (event: KeyboardEvent) => {
    event.preventDefault()
    if (!loading) save()
  })

  /** 自动保存 */
  useDebounceEffect(
    () => {
      save()
    },
    [componentList, pageInfo],
    {
      wait: 1000,
    },
  )

  return (
    <Button
      onClick={save}
      disabled={loading}
      icon={loading ? <LoadingOutlined /> : null}
    >
      保存
    </Button>
  )
}

/** 发布按钮 */
const PublishButton: FC = () => {
  const nav = useNavigate()
  const { id } = useParams()
  const { componentList = [] } = useGetComponentInfo()
  const pageInfo = useGetPageInfo()

  /** 发布请求 */
  const { loading, run: publishData } = useRequest(
    async () => {
      if (!id) return
      await updateQuestionService(id, {
        ...pageInfo,
        componentList,
        isPublished: true, // 表示问卷已经发布
      })
    },
    {
      manual: true,
      onSuccess() {
        message.success('发布成功')
        nav('/question/stat/' + id) // 发布成功，跳转到统计页面
      },
    },
  )

  return (
    <Button
      type="primary"
      onClick={publishData}
      disabled={loading}
      icon={loading ? <LoadingOutlined /> : null}
    >
      发布
    </Button>
  )
}

/** 头部按钮集合 */
const HeaderButton: FC = () => {
  return (
    <Space>
      <SaveButton />
      <PublishButton />
    </Space>
  )
}

export default HeaderButton
