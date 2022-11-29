import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { jobSlice } from './jobs/index'

const rootReducer = combineReducers({
	jobs: jobSlice.reducer
})

export const store = configureStore({
	reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
