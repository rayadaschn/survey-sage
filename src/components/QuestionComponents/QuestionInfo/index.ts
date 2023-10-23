import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionInfoDefaultProps } from './type'

export * from './type'

/**
 * Info 组件的配置
 */
const QuestionInfoConf = {
  title: '问卷信息',
  type: 'questionInfo',
  Component,
  PropComponent,
  defaultProps: QuestionInfoDefaultProps,
}

export default QuestionInfoConf
