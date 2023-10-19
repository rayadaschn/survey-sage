import { StateType } from '@/store'
import { UserStateType } from '@/store/modules/userReducer'
import { useSelector } from 'react-redux'

export function useGetUserInfo() {
  const { username, nickname } = useSelector<StateType>(
    (state) => state.user,
  ) as UserStateType

  return { username, nickname }
}
