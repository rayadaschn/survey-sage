import Component from './Component'
import PropComponent from './PropComponent'
import { QuestionTitleDefaultProps } from './type'

export * from './type'

export default {
  title: '标题',
  Type: 'questionTitle',
  Component,
  PropComponent,
  defaultProps: QuestionTitleDefaultProps,
}
