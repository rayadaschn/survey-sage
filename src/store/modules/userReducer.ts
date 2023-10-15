import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface UserStateType {
  username: string
  nickname: string
}

const INIT_STATE: UserStateType = { username: '', nickname: '' }

export const userSlice = createSlice({
  name: 'user',
  initialState: INIT_STATE,
  reducers: {
    loginReducer: (
      state: UserStateType,
      action: PayloadAction<UserStateType>,
    ) => {
      return action.payload
    },
    logoutReducer: () => {
      return INIT_STATE
    },
  },
})

export default userSlice.reducer

export const { loginReducer, logoutReducer } = userSlice.actions
