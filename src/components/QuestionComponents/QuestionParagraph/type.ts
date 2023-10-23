/**
 * 定义 Paragraph 组件所需属性
 */
export type QuestionParagraphPropsType = {
  text?: string
  isCenter?: boolean

  // 用于 PropComponent
  onChange?: (newProps: QuestionParagraphPropsType) => void
  disabled?: boolean
}

/**
 * 定义默认 Paragraph 组件所需属性默认值
 */
export const QuestionParagraphDefaultProps: QuestionParagraphPropsType = {
  text: '一行段落',
  isCenter: false,
}
