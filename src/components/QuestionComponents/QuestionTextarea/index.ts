import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionTextareaDefaultProps } from './type'

export * from './type'

/**
 * Textarea 组件的配置
 */
const QuestionTextareaConf = {
  title: '多行输入',
  type: 'questionTextarea', // 要和后端统一好
  Component, // 画布显示的组件
  PropComponent, // 修改属性
  defaultProps: QuestionTextareaDefaultProps,
}

export default QuestionTextareaConf
