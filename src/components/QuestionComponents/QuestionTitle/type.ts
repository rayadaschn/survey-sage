/**
 * 定义 Title 组件所需属性
 */
export interface QuestionTitlePropsType {
  text?: string
  level?: 1 | 2 | 3 | 4 | 5
  isCenter?: boolean

  onChange?: (newProps: QuestionTitlePropsType) => void
  disabled?: boolean
}

/**
 * 定义默认 Title 组件所需属性默认值
 */
export const QuestionTitleDefaultProps: QuestionTitlePropsType = {
  text: '一级标题',
  level: 1,
  isCenter: false,
}
