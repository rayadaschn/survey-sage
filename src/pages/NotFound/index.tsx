import { MANAGE_INDEX_PATHNAME } from '@/router'
import { Button, Result } from 'antd'

const NotFound: React.FC = () => {
  const nav = useNavigate()
  const goIndex = () => nav(MANAGE_INDEX_PATHNAME)
  return (
    <>
      <Result
        status="404"
        title="404"
        subTitle="抱歉，您访问的页面不存在"
        extra={
          <Button type="primary" onClick={goIndex}>
            返回首页
          </Button>
        }
      />
    </>
  )
}

export default NotFound
