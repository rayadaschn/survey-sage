import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionTitleDefaultProps } from './type'

export * from './type'

/**
 * Title 组件的配置
 */
const QuestionTitleConf = {
  title: '标题',
  type: 'questionTitle', // 和后端统一
  Component,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps,
}

export default QuestionTitleConf
