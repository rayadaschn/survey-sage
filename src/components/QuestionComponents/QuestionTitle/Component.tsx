import { FC } from 'react'
import { Typography } from 'antd'
import { QuestionTitleDefaultProps, QuestionTitlePropsType } from './type'

const { Title } = Typography

const QuestionTitle: FC<QuestionTitlePropsType> = (
  props: QuestionTitlePropsType,
) => {
  const {
    text = '',
    level = 1,
    isCenter = false,
  } = { ...QuestionTitleDefaultProps, ...props }

  const getFontSize = (level: number) => {
    if (level === 1) return '24px'
    if (level === 2) return '20px'
    if (level === 3) return '16px'
    return '16px'
  }

  return (
    <Title
      level={level}
      style={{
        textAlign: isCenter ? 'center' : 'start',
        marginBottom: '0',
        fontSize: getFontSize(level),
      }}
    >
      {text}
    </Title>
  )
}

export default QuestionTitle
