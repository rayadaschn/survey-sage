import Component from './Component'
import PropComponent from './PropComponent'
import StatComponent from './StatComponent'
import { QuestionCheckboxDefaultProps } from './type'

export * from './type'

export default {
  title: '多选',
  type: 'questionCheckbox',
  Component,
  PropComponent,
  StatComponent,
  defaultProps: QuestionCheckboxDefaultProps,
}
