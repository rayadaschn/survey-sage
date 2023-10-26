import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import produce from 'immer'

export interface PageInfoType {
  title: string
  desc?: string
  js?: string
  css?: string
  isPubulished?: boolean
}

const INIT_STATE: PageInfoType = {
  title: '',
  desc: '',
  js: '',
  css: '',
}

/**
 * 页面数据
 */
const pageInfoSlice = createSlice({
  name: 'pageInfo',
  initialState: INIT_STATE,
  reducers: {
    resetPageInfo: (
      state: PageInfoType,
      action: PayloadAction<PageInfoType>,
    ) => {
      return action.payload
    },

    // 修改标题
    changePageTitle: produce(
      (state: PageInfoType, action: PayloadAction<string>) => {
        state.title = action.payload
      },
    ),
  },
})

export default pageInfoSlice.reducer
export const { resetPageInfo, changePageTitle } = pageInfoSlice.actions
