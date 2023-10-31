import { configureStore } from '@reduxjs/toolkit'
import userReducer, { UserStateType } from './modules/userReducer'
import pageInfoReducer, { PageInfoType } from './modules/pageInfoReducer'
import componentsReducer, {
  ComponentsStateType,
} from './modules/componentsReducer'
import undoable, { StateWithHistory, excludeAction } from 'redux-undo'

export interface StateType {
  user: UserStateType
  pageInfo: PageInfoType
  components: StateWithHistory<ComponentsStateType> // 增加了 undo
}

export default configureStore({
  reducer: {
    // 分模块
    user: userReducer,
    pageInfo: pageInfoReducer,
    // 增加撤销功能
    components: undoable(componentsReducer, {
      limit: 20, // 撤销记忆为 20 步
      filter: excludeAction([
        'components/resetComponents',
        'components/changeSelectedId',
        'components/selectPrevComponent',
        'components/selectNextComponent',
      ]), // 屏蔽部分操作
    }),
  },
})
