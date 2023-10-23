/**
 * 定义 Textarea 组件所需属性
 */
export type QuestionTextareaPropsType = {
  title?: string
  placeholder?: string

  onChange?: (newProps: QuestionTextareaPropsType) => void
  disabled?: boolean
}

/**
 * 定义默认 Textarea 组件所需属性默认值
 */
export const QuestionTextareaDefaultProps: QuestionTextareaPropsType = {
  title: '输入框标题',
  placeholder: '请输入...',
}
