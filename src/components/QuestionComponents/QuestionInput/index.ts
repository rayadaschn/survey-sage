import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionInputDefaultProps } from './type'

export * from './type'

/**
 * Input 组件的配置
 */
const QuestionInputConf = {
  title: '输入框',
  type: 'questionInput', // 和后端统一
  Component, // 画布显示的组件
  PropComponent, // 修改属性
  defaultProps: QuestionInputDefaultProps,
}

export default QuestionInputConf
