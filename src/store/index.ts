import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './modules/userReducer'
import pageInfoReducer, { PageInfoType } from './modules/pageInfoReducer'
import componentsReducer, {
  ComponentsStateType,
} from './modules/componentsReducer'

export interface StateType {
  user: UserStateType
  pageInfo: PageInfoType
  components: ComponentsStateType
}

export default configureStore({
  reducer: {
    // 分模块
    user: userReducer,
    pageInfo: pageInfoReducer,
    components: componentsReducer,
  },
})
