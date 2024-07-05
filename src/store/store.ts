import TestReducer from '@/reducers/test/test.reducer';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux"

const combinatedReducer = combineReducers({
    test: TestReducer
})

export const store = configureStore({
    reducer: combinatedReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
          serializableCheck: false,
        })
})

export type RootState = ReturnType<typeof combinatedReducer>
export type AppDispatch = typeof store.dispatch