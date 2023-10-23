import { FC } from 'react'
import { Checkbox, Space, Typography } from 'antd'
import { QuestionCheckboxDefaultProps, QuestionCheckboxPropsType } from './type'

const { Paragraph } = Typography

const Component: FC<QuestionCheckboxPropsType> = (
  props: QuestionCheckboxPropsType,
) => {
  const {
    title,
    isVertical,
    list = [],
  } = { ...QuestionCheckboxDefaultProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <Space>
        {list.map((opt) => {
          const { value, text, checked } = opt
          return (
            <Checkbox key={value} value={value} checked={checked}>
              {text}
            </Checkbox>
          )
        })}
      </Space>
    </div>
  )
}

export default Component
