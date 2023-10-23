import { FC } from 'react'
import { Typography, Input } from 'antd'
import { QuestionTextareaPropsType, QuestionTextareaDefaultProps } from './type'

const { Paragraph } = Typography
const { TextArea } = Input

const QuestionTextarea: FC<QuestionTextareaPropsType> = (
  props: QuestionTextareaPropsType,
) => {
  const { title, placeholder } = { ...QuestionTextareaDefaultProps, ...props }

  return (
    <div>
      <Paragraph strong>{title}</Paragraph>
      <div>
        <TextArea placeholder={placeholder} />
      </div>
    </div>
  )
}

export default QuestionTextarea
