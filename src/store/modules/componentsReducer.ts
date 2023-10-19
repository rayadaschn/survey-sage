import { ComponentPropsType } from '@/components/QuestionComponents'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

/** 单个组件信息 */
export interface ComponentInfoType {
  fe_id: string
  type: string
  title: string
  props: ComponentPropsType
  isHidden?: boolean
  isLock?: boolean
}

/** 组件列表 */
export interface ComponentsStateType {
  componentList: ComponentInfoType[]
  selectedId: string
  copiedComponent: ComponentInfoType | null
}

/** 初始值 */
const INIT_STATE: ComponentsStateType = {
  componentList: [],
  selectedId: '',
  copiedComponent: null,
}

export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    // 重置所有组件
    resetComponents: (
      state: ComponentsStateType,
      action: PayloadAction<ComponentsStateType>,
    ) => {
      return action.payload
    },
  },
})

export const { resetComponents } = componentsSlice.actions

export default componentsSlice.reducer
