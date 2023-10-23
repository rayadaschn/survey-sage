import { FC } from 'react'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput'
import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle'
import QuestionCheckboxConf, {
  QuestionCheckboxPropsType,
  QuestionCheckboxStatPropsType,
} from './QuestionCheckbox'

/** 统一封装组件的 prop type */
export type ComponentPropsType = QuestionInputPropsType &
  QuestionTitlePropsType &
  QuestionCheckboxPropsType

/** 统一封装各个组件的统计属性类型 */
type ComponentStatPropsType = QuestionCheckboxStatPropsType

/** 统一封装组件配置 type */
export interface ComponentConfType {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
  StatComponent?: FC<ComponentStatPropsType>
}

/** 全部组件的配置列表 */
const componentConfList: ComponentConfType[] = [
  QuestionInputConf,
  QuestionTitleConf,
  QuestionCheckboxConf,
]

/**
 * 组件分组
 */
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionTitleConf],
  },
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    components: [QuestionInputConf],
  },
  {
    groupId: 'chooseGroup',
    groupName: '用户选择',
    components: [QuestionCheckboxConf],
  },
]

/**
 * 依据组件类型，从配置中返回相应组件
 * @param type 组件类型
 */
export function getComponentConfByType(type: string) {
  return componentConfList.find((item) => item.type === type)
}
