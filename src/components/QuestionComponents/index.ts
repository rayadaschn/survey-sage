import { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle'

/** 统一封装组件的 prop type */
export type ComponentPropsType = QuestionInputPropsType & QuestionTitlePropsType

/** 统一封装组件配置 type */
export interface ComponentConfType {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

/** 全部组件的配置列表 */
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
]

export function getComponentConfByType(type: string) {
  return componentConfList.find((item) => item.type === type)
}
