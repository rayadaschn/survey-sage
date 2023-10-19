import { StateType } from '@/store'
import { PageInfoType } from '@/store/modules/pageInfoReducer'
import { useSelector } from 'react-redux'

export function useGetPageInfo() {
  const pageInfo = useSelector<StateType>(
    (state) => state.pageInfo,
  ) as PageInfoType
  return pageInfo
}
