import Component from './Component'
import PropComponent from './PropComponent'
import StatComponent from './StatComponent'
import { QuestionRadioDefaultProps } from './type'

export * from './type'

/**
 * Radio 组件的配置
 */
const QuestionRadioConf = {
  title: '单选',
  type: 'questionRadio',
  Component,
  PropComponent,
  defaultProps: QuestionRadioDefaultProps,
  StatComponent,
}

export default QuestionRadioConf
