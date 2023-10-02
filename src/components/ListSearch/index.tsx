import type { ChangeEvent, FC } from 'react'
import { Input } from 'antd'
import { LIST_SEARCH_PARAM_KEY } from '@/constant'

const { Search } = Input

const ListSearch: FC = () => {
  const nav = useNavigate()
  const { pathname } = useLocation()

  const [value, setValue] = useState('')
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value)
  }

  /** 获取 url 参数, 并设置到 input value */
  const [searchParams] = useSearchParams()
  useEffect(() => {
    const curVal = searchParams.get(LIST_SEARCH_PARAM_KEY) || ''
    setValue(curVal)
  }, [searchParams])
  function handleSearch(value: string) {
    /** 跳转页面, 增加 url 参数 */
    nav({
      pathname: pathname,
      search: `${LIST_SEARCH_PARAM_KEY}=${value}`,
    })
  }
  return (
    <Search
      placeholder="请输入关键字"
      value={value}
      onChange={handleChange}
      onSearch={handleSearch}
      className="w-50"
    />
  )
}

export default ListSearch
