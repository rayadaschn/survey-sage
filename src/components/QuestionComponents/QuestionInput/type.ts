/**
 * 定义 input 组件所需属性
 */
export interface QuestionInputPropsType {
  title?: string
  placeholder?: string

  onChange?: (newProps: QuestionInputPropsType) => void
  disabled?: boolean
}

/**
 * 定义默认 Input 组件所需属性默认值
 */
export const QuestionInputDefaultProps: QuestionInputPropsType = {
  title: '输入框标题',
  placeholder: '请输入...',
}
