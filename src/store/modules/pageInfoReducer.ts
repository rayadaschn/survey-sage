import { PayloadAction, createSlice } from '@reduxjs/toolkit'

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
  },
})

export default pageInfoSlice.reducer
export const { resetPageInfo } = pageInfoSlice.actions
