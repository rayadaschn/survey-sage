import { StateType } from '@/store'
import { ComponentsStateType } from '@/store/modules/componentsReducer'
import { useSelector } from 'react-redux'

export function useGetComponentInfo() {
  const components = useSelector<StateType>(
    (state) => state.components.present, // present 增加了 undo 撤销
  ) as ComponentsStateType

  const { componentList = [], selectedId, copiedComponent } = components
  const selectedComponent = componentList.find((c) => c.fe_id === selectedId)
  return {
    componentList,
    selectedId,
    selectedComponent,
    copiedComponent,
  }
}
