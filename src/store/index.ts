import { configureStore } from '@reduxjs/toolkit'
import countReducer from './modules/count'

export default configureStore({
  reducer: {
    count: countReducer,
  },
})
