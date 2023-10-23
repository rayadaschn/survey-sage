/**
 * 定义选项类型
 */
export type OptionType = {
  value: string
  text: string
  checked: boolean
}

/**
 * 定义 Checkout 组件所需属性
 */
export type QuestionCheckboxPropsType = {
  title?: string
  isVertical?: boolean
  list?: OptionType[]

  // 用于 PropComponent
  onChange?: (newProps: QuestionCheckboxPropsType) => void
  disabled?: boolean
}

/**
 * 定义默认 Checkout 组件所需属性默认值
 */
export const QuestionCheckboxDefaultProps: QuestionCheckboxPropsType = {
  title: '多选标题',
  isVertical: false,
  list: [
    { value: 'item1', text: '选项1', checked: false },
    { value: 'item2', text: '选项2', checked: false },
    { value: 'item3', text: '选项3', checked: false },
  ],
}

/**
 * 统计组件的属性类型
 */
export type QuestionCheckboxStatPropsType = {
  stat: Array<{ name: string; count: number }>
}
