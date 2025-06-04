import { configureStore } from '@reduxjs/toolkit'
import watchListReducer from '../redux/slices/watchListSlice'

export const store = configureStore({
  reducer: {
    watchList: watchListReducer,
  },
})