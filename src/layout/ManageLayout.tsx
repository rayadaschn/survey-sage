import React, { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { Button, Space, Divider, message } from 'antd'
import styles from './ManageLayout.module.less'
import {
  BarsOutlined,
  DeleteOutlined,
  PlusOutlined,
  StarOutlined,
} from '@ant-design/icons'
import { createQuestionService } from '@/services'

const MainLayout: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const [loading, setLoading] = useState(false)
  async function handleCreateClick() {
    setLoading(true)
    const data = await createQuestionService()
    const { id } = data || {}
    if (id) {
      nav(`question/edit/${id}`)
      message.success('创建成功')
    }
    setLoading(false)
  }
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Space direction="vertical">
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={handleCreateClick}
            disabled={loading}
          >
            新建问卷
          </Button>

          <Divider />

          <Button
            type={pathname.startsWith('/manage/list') ? 'default' : 'text'}
            size="large"
            icon={<BarsOutlined />}
            onClick={() => nav('/manage/list')}
          >
            我的问卷
          </Button>

          <Button
            type={pathname.startsWith('/manage/star') ? 'default' : 'text'}
            size="large"
            icon={<StarOutlined />}
            onClick={() => nav('/manage/star')}
          >
            星标问卷
          </Button>

          <Button
            type={pathname.startsWith('/manage/trash') ? 'default' : 'text'}
            size="large"
            icon={<DeleteOutlined />}
            onClick={() => nav('/manage/trash')}
          >
            回收站
          </Button>
        </Space>
      </div>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout
