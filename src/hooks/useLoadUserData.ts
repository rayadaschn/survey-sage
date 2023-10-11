import { getUserInfoService } from '@/api'
import { loginReducer } from '@/store/modules/userReducer'
import { useDispatch } from 'react-redux'
import { useGetUserInfo } from './useGetUserInfo'

export function useLoadUserData() {
  const dispatch = useDispatch()
  const [waitingUserData, setWaitingUserData] = useState(true)

  // 请求用户信息
  const { run } = useRequest(getUserInfoService, {
    manual: true,
    onSuccess(result) {
      const { username, nickname } = result
      dispatch(loginReducer({ username, nickname }))
    },
    onFinally() {
      setWaitingUserData(false)
    },
  })

  // 判断当前是否已存储用户信息
  const { username } = useGetUserInfo()
  useEffect(() => {
    if (username) {
      setWaitingUserData(false)
      return
    }
    run() // 若无数据, 则进行数据请求
  }, [waitingUserData])

  return { waitingUserData } // 返回是否正在加载数据
}
