import { FC } from 'react'
import QuestionCheckboxConf, {
  QuestionCheckboxPropsType,
  QuestionCheckboxStatPropsType,
} from './QuestionCheckbox'

import QuestionInfoConf, { QuestionInfoPropsType } from './QuestionInfo'
import QuestionInputConf, { QuestionInputPropsType } from './QuestionInput'

import QuestionParagraphConf, {
  QuestionParagraphPropsType,
} from './QuestionParagraph'

import QuestionRadioConf, {
  QuestionRadioPropsType,
  QuestionRadioStatPropsType,
} from './QuestionRadio'

import QuestionTextareaConf, {
  QuestionTextareaPropsType,
} from './QuestionTextarea'

import QuestionTitleConf, { QuestionTitlePropsType } from './QuestionTitle'

/** 统一封装组件的 prop 属性类型 */
export type ComponentPropsType = QuestionCheckboxPropsType &
  QuestionInfoPropsType &
  QuestionInputPropsType &
  QuestionParagraphPropsType &
  QuestionRadioPropsType &
  QuestionTextareaPropsType &
  QuestionTitlePropsType

/** 统一封装各个组件的统计属性类型 */
type ComponentStatPropsType = QuestionCheckboxStatPropsType &
  QuestionRadioStatPropsType

/** 统一封装组件配置 type */
export interface ComponentConfType {
  title: string
  type: string
  Component: FC<ComponentPropsType>
  PropComponent: FC<ComponentPropsType>
  defaultProps: ComponentPropsType
  StatComponent?: FC<ComponentStatPropsType>
}

/**
 * 组件分组
 */
export const componentConfGroup = [
  {
    groupId: 'textGroup',
    groupName: '文本显示',
    components: [QuestionInfoConf, QuestionParagraphConf, QuestionTitleConf],
  },
  {
    groupId: 'inputGroup',
    groupName: '用户输入',
    components: [QuestionInputConf, QuestionTextareaConf],
  },
  {
    groupId: 'chooseGroup',
    groupName: '用户选择',
    components: [QuestionCheckboxConf, QuestionRadioConf],
  },
]

/** 全部组件的配置列表 */
const componentConfList: ComponentConfType[] = [
  QuestionCheckboxConf,
  QuestionInfoConf,
  QuestionInputConf,
  QuestionParagraphConf,
  QuestionRadioConf,
  QuestionTextareaConf,
  QuestionTitleConf,
]

/**
 * 依据组件类型，从配置中返回相应组件
 * @param type 组件类型
 */
export function getComponentConfByType(type: string) {
  return componentConfList.find((item) => item.type === type)
}
