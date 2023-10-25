import { useGetPageInfo } from '@/hooks'
import { resetPageInfo } from '@/store/modules/pageInfoReducer'
import { Form, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import { FC } from 'react'
import { useDispatch } from 'react-redux'

const RightPageSetting: FC = () => {
  const pageInfo = useGetPageInfo()
  const [form] = Form.useForm()
  const dispatch = useDispatch()

  /** 更新表单 */
  const handelValuesChange = () => {
    dispatch(resetPageInfo(form.getFieldsValue()))
  }

  return (
    <Form
      layout="vertical"
      initialValues={pageInfo}
      onValuesChange={handelValuesChange}
      form={form}
    >
      <Form.Item
        name="title"
        label="问卷标题"
        rules={[{ required: true, message: '请输入标题' }]}
      >
        <Input placeholder="请输入标题" />
      </Form.Item>

      <Form.Item name="desc" label="问卷描述">
        <TextArea placeholder="问卷描述信息" />
      </Form.Item>

      <Form.Item name="css" label="样式代码">
        <TextArea placeholder="请输入 CSS 样式代码" />
      </Form.Item>

      <Form.Item name="js" label="脚本代码">
        <TextArea placeholder="请输入 JS 脚本代码" />
      </Form.Item>
    </Form>
  )
}

export default RightPageSetting
