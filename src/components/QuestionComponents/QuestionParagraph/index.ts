import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionParagraphDefaultProps } from './type'

export * from './type'

/**
 * Paragraph 组件的配置
 */
const QuestionParagraphConf = {
  title: '段落',
  type: 'questionParagraph',
  Component,
  PropComponent,
  defaultProps: QuestionParagraphDefaultProps,
}

export default QuestionParagraphConf
