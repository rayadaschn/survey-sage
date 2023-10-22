import { ComponentPropsType } from '@/components/QuestionComponents'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import produce from 'immer'
import { nanoid } from 'nanoid'
import { cloneDeep } from 'lodash-es'

/** 单个组件信息 */
export interface ComponentInfoType {
  fe_id: string
  type: string
  title: string
  props: ComponentPropsType
  isHidden?: boolean
  isLocked?: boolean
}

/** 组件列表 */
export interface ComponentsStateType {
  componentList: ComponentInfoType[]
  selectedId: string
  copiedComponent: ComponentInfoType | null
}

/**
 * 获取下一个 selectedId
 * @param fe_id 当前的 id
 * @param componentList 组件列表
 */
export function getNextSelectedId(
  fe_id: string,
  componentList: ComponentInfoType[],
) {
  const visibleComponentList = componentList.filter((c) => !c.isHidden)
  const index = visibleComponentList.findIndex((c) => c.fe_id === fe_id)
  if (index < 0) return ''

  // 重新计算 selectedId
  let newSelectedId = ''
  const length = visibleComponentList.length
  if (length <= 1) {
    // 组件长度就一个，被删除了，就没有组件
    newSelectedId = ''
  } else {
    // 组件长度 > 1
    if (index + 1 === length) {
      // 要删除最后一个，就要选中上一个
      newSelectedId = visibleComponentList[index - 1].fe_id
    } else {
      // 要删除的不是最后一个，删除以后，选中下一个
      newSelectedId = visibleComponentList[index + 1].fe_id
    }
  }

  return newSelectedId
}

/**
 * 插入新组件
 * @param draft state draft
 * @param newComponent 新组件
 */
export function insertNewComponent(
  draft: ComponentsStateType,
  newComponent: ComponentInfoType,
) {
  const { selectedId, componentList } = draft
  const index = componentList.findIndex((c) => c.fe_id === selectedId)

  if (index < 0) {
    // 未选中任何组件
    draft.componentList.push(newComponent)
  } else {
    // 选中了组件，插入到 index 后面
    draft.componentList.splice(index + 1, 0, newComponent)
  }

  draft.selectedId = newComponent.fe_id
}

/** 初始值 */
const INIT_STATE: ComponentsStateType = {
  componentList: [],
  selectedId: '',
  copiedComponent: null,
}

/**
 * 组件列表
 */
export const componentsSlice = createSlice({
  name: 'components',
  initialState: INIT_STATE,
  reducers: {
    /** 重置所有组件 */
    resetComponents: (
      state: ComponentsStateType,
      action: PayloadAction<ComponentsStateType>,
    ) => {
      return action.payload
    },

    /** 修改 selectedId */
    changeSelectedId: produce(
      (draft: ComponentsStateType, action: PayloadAction<string>) => {
        draft.selectedId = action.payload
      },
    ),

    /** 添加新组件 */
    addComponent: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<ComponentInfoType>,
      ) => {
        const newComponent = action.payload
        insertNewComponent(draft, newComponent)
      },
    ),

    /** 修改组件属性 */
    changeComponentProps: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ fe_id: string; newProps: ComponentPropsType }>,
      ) => {
        const { fe_id, newProps } = action.payload

        // 当前要修改属性的这个组件
        const curComp = draft.componentList.find((c) => c.fe_id === fe_id)
        if (curComp) {
          curComp.props = {
            ...curComp.props,
            ...newProps,
          }
        }
      },
    ),

    /** 删除选中的组件 */
    removeSelectedComponent: produce((draft: ComponentsStateType) => {
      const { componentList = [], selectedId: removedId } = draft

      // 重新计算 selectedId
      const newSelectedId = getNextSelectedId(removedId, componentList)
      draft.selectedId = newSelectedId

      const index = componentList.findIndex((c) => c.fe_id === removedId)
      componentList.splice(index, 1)
    }),

    /** 隐藏/显示 组件 */
    changeComponentHidden: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ fe_id: string; isHidden: boolean }>,
      ) => {
        const { componentList = [] } = draft
        const { fe_id, isHidden } = action.payload

        // 重新计算 selectedId
        let newSelectedId = ''
        if (isHidden) {
          // 要隐藏
          newSelectedId = getNextSelectedId(fe_id, componentList)
        } else {
          // 要显示
          newSelectedId = fe_id
        }
        draft.selectedId = newSelectedId

        const curComp = componentList.find((c) => c.fe_id === fe_id)
        if (curComp) {
          curComp.isHidden = isHidden
        }
      },
    ),

    /** 锁定/解锁 组件 */
    toggleComponentLocked: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ fe_id: string }>,
      ) => {
        const { fe_id } = action.payload

        const curComp = draft.componentList.find((c) => c.fe_id === fe_id)
        if (curComp) {
          curComp.isLocked = !curComp.isLocked
        }
      },
    ),

    /** 拷贝当前选中的组件 */
    copySelectedComponent: produce((draft: ComponentsStateType) => {
      const { selectedId, componentList = [] } = draft
      const selectedComponent = componentList.find(
        (c) => c.fe_id === selectedId,
      )
      if (selectedComponent == null) return
      draft.copiedComponent = cloneDeep(selectedComponent) // 深拷贝
    }),

    /** 粘贴组件 */
    pasteCopiedComponent: produce((draft: ComponentsStateType) => {
      const { copiedComponent } = draft
      if (copiedComponent == null) return

      // 要把 fe_id 给修改了，重要！！
      copiedComponent.fe_id = nanoid()

      // 插入 copiedComponent
      insertNewComponent(draft, copiedComponent)
    }),

    /** 选中上一个 */
    selectPrevComponent: produce((draft: ComponentsStateType) => {
      const { selectedId, componentList } = draft
      const selectedIndex = componentList.findIndex(
        (c) => c.fe_id === selectedId,
      )

      if (selectedIndex < 0) return // 未选中组件
      if (selectedIndex <= 0) return // 已经选中了第一个，无法在向上选中

      draft.selectedId = componentList[selectedIndex - 1].fe_id
    }),

    /** 选中下一个 */
    selectNextComponent: produce((draft: ComponentsStateType) => {
      const { selectedId, componentList } = draft
      const selectedIndex = componentList.findIndex(
        (c) => c.fe_id === selectedId,
      )

      if (selectedIndex < 0) return // 未选中组件
      if (selectedIndex + 1 === componentList.length) return // 已经选中了最后一个，无法再向下选中

      draft.selectedId = componentList[selectedIndex + 1].fe_id
    }),

    /** 修改组件标题 */
    changeComponentTitle: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ fe_id: string; title: string }>,
      ) => {
        const { title, fe_id } = action.payload
        const curComp = draft.componentList.find((c) => c.fe_id === fe_id)
        if (curComp) curComp.title = title
      },
    ),

    /** 移动组件位置 */
    moveComponent: produce(
      (
        draft: ComponentsStateType,
        action: PayloadAction<{ oldIndex: number; newIndex: number }>,
      ) => {
        const { componentList: curComponentList } = draft
        const { oldIndex, newIndex } = action.payload

        draft.componentList = arrayMove(curComponentList, oldIndex, newIndex)
      },
    ),
  },
})

export const {
  resetComponents,
  changeSelectedId,
  addComponent,
  changeComponentProps,
  removeSelectedComponent,
  changeComponentHidden,
  toggleComponentLocked,
  copySelectedComponent,
  pasteCopiedComponent,
  selectPrevComponent,
  selectNextComponent,
  changeComponentTitle,
  moveComponent,
} = componentsSlice.actions

export default componentsSlice.reducer
