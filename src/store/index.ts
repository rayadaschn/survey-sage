import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './modules/userReducer'
import pageInfoReducer, { PageInfoType } from './modules/pageInfoReducer'

export interface StateType {
  user: UserStateType
  pageInfo: PageInfoType
}

export default configureStore({
  reducer: {
    // 分模块
    user: userReducer,
    pageInfo: pageInfoReducer,
  },
})
