/**
 * 定义 Info 组件所需属性
 */
export type QuestionInfoPropsType = {
  title?: string
  desc?: string

  // 用于 PropComponent
  onChange?: (newProps: QuestionInfoPropsType) => void
  disabled?: boolean
}

/**
 * 定义默认 Info 组件所需属性默认值
 */
export const QuestionInfoDefaultProps: QuestionInfoPropsType = {
  title: '问卷标题',
  desc: '问卷描述',
}
