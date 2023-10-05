import { useSearchParams } from 'react-router-dom'
import { useRequest } from 'ahooks'
import { getQuestionListService } from '@/services'
import { LIST_SEARCH_PARAM_KEY } from '@/constant'

interface OptionType {
  isStar: boolean
  isDeleted: boolean
}

export function useLoadQuestionListData(opt: Partial<OptionType> = {}) {
  const { isStar, isDeleted } = opt

  const [searchParams] = useSearchParams()
  const { data, loading, error } = useRequest(async () => {
    const keyword = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    const data = await getQuestionListService({ keyword, isStar, isDeleted })
    return data
  })
  return { data, loading, error }
}
