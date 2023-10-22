import { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle'

/** 统一封装组件的 prop type */
export type ComponentPropsType = QuestionInputPropsType | QuestionTitlePropsType

/** 统一封装组件配置 type */
export interface ComponentConfType {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
}

/** 全部组件的配置列表 */
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
]

/**
 * 组件分组
 */
export const componentConfGroup = [
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    components: [QuestionInputConf],
  },
]

/**
 * 依据组件类型，从配置中返回相应组件
 * @param type 组件类型
 */
export function getComponentConfByType(type: string) {
  return componentConfList.find((item) => item.type === type)
}
