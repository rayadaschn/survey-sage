import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './modules/userReducer'

export interface StateType {
  user: UserStateType
}

export default configureStore({
  reducer: {
    // 分模块
    user: userReducer,
  },
})
