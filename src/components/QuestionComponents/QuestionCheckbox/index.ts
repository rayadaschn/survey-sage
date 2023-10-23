import Component from './Component'
import PropComponent from './PropComponent'
import StatComponent from './StatComponent'
import { QuestionCheckboxDefaultProps } from './type'

export * from './type'

/**
 * Checkbox 组件的配置
 */
const QuestionCheckboxConf = {
  title: '多选',
  type: 'questionCheckbox',
  Component,
  PropComponent,
  StatComponent,
  defaultProps: QuestionCheckboxDefaultProps,
}

export default QuestionCheckboxConf
