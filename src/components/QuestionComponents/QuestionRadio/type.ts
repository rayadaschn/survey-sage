/**
 * 定义选项类型
 */
export type OptionType = {
  value: string
  text: string
}

/**
 * 定义 Radio 组件所需属性
 */
export type QuestionRadioPropsType = {
  title?: string
  isVertical?: boolean
  options?: OptionType[]
  value?: string

  // 用于 PropComponent
  onChange?: (newProps: QuestionRadioPropsType) => void
  disabled?: boolean
}

/**
 * 定义默认 Radio 组件所需属性默认值
 */
export const QuestionRadioDefaultProps: QuestionRadioPropsType = {
  title: '单选标题',
  isVertical: false,
  options: [
    { value: 'item1', text: '选项1' },
    { value: 'item2', text: '选项2' },
    { value: 'item3', text: '选项3' },
  ],
  value: '',
}

/**
 * 统计组件的属性类型
 */
export type QuestionRadioStatPropsType = {
  stat: Array<{ name: string; count: number }>
}
