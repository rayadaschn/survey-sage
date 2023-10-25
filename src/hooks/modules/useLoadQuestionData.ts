import { useParams } from 'react-router-dom'
import { getQuestionService } from '@/api'
import { useDispatch } from 'react-redux'
import { resetPageInfo } from '@/store/modules/pageInfoReducer'
import { resetComponents } from '@/store/modules/componentsReducer'

export function useLoadQuestionData() {
  const { id = '' } = useParams()

  const dispatch = useDispatch()

  // ajax 请求
  const { data, loading, error, run } = useRequest(
    async (id: string) => {
      if (!id) throw new Error('缺少问卷 id')
      const data = await getQuestionService(id)
      return data
    },
    {
      manual: true,
    },
  )

  // 依据获取的 data 设置 redux store
  useEffect(() => {
    if (!data) return

    const {
      title = '',
      desc = '',
      js = '',
      css = '',
      // isPublished = false,
      componentList = [],
    } = data

    // 获取默认的 selectedId
    let selectedId = ''
    if (componentList.length > 0) {
      selectedId = componentList[0].fe_id // 默认选中第一个组件
    }

    // 把 componentList 存储到 Redux store 中
    dispatch(
      resetComponents({ componentList, selectedId, copiedComponent: null }),
    )

    // 把 pageInfo 存储到 redux store
    dispatch(resetPageInfo({ title, desc, js, css }))
  }, [data])

  // 判断 id 变化，执行 ajax 加载问卷数据
  useEffect(() => {
    run(id)
  }, [id])

  // const [loading, setLoading] = useState(true)
  // const [questionData, setQuestionData] = useState({})

  // useEffect(() => {
  //   async function fn() {
  //     const data = await getQuestionService(id)
  //     setQuestionData(data)
  //     setLoading(false)
  //     console.log('edit page data', data)
  //   }
  //   fn()
  // }, [id])

  return { loading, error }
}
