import { StateType } from '@/store'
import { ComponentsStateType } from '@/store/modules/componentsReducer'
import { useSelector } from 'react-redux'

export function useGetComponentInfo() {
  const components = useSelector<StateType>(
    (state) => state.components,
  ) as ComponentsStateType

  const { componentList = [] } = components
  return {
    componentList,
  }
}
