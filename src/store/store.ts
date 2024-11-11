import ImageReducer from '@/reducers/image/image.reducer';
import LanguageReducer from '@/reducers/language/language.reducer';
import MainReducer from '@/reducers/main/main.reducer';
import MobileReducer from '@/reducers/mobile/mobile.reducer';
import TestReducer from '@/reducers/test/test.reducer';
import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux"

const combinatedReducer = combineReducers({
    test: TestReducer,
    language: LanguageReducer,
    mobile: MobileReducer,
    main: MainReducer,
    image: ImageReducer
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