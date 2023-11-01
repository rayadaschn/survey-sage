import { useGetPageInfo } from '@/hooks'
import { changePageTitle } from '@/store/modules/pageInfoReducer'
import { EditOutlined } from '@ant-design/icons'
import { Button, Input, Space } from 'antd'
import { ChangeEvent, FC } from 'react'
import { useDispatch } from 'react-redux'

const HeaderTitle: FC = () => {
  const { title } = useGetPageInfo()
  const dispatch = useDispatch()

  /** 编辑状态 */
  const [editState, setEditState] = useState(false)

  /** 编辑标题 */
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value.trim()
    if (!newTitle) return
    dispatch(changePageTitle(newTitle))
  }

  if (editState) {
    return (
      <Input
        value={title}
        onChange={handleChange}
        onPressEnter={() => setEditState(false)}
        onBlur={() => setEditState(false)}
      />
    )
  }

  return (
    <Space>
      <div>{title}</div>
      <Button
        icon={<EditOutlined />}
        type="text"
        onClick={() => setEditState(true)}
      />
    </Space>
  )
}

export default HeaderTitle
