import { languageDefault, languageList } from "@/constants/languages/language";
import { ILanguageItem, ILanguageState } from "@/interfaces/language/language";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ILanguageState = {
    languageList: languageList,
    languageSelected: languageDefault,
    language: languageList[0],
    languageSwitch: false
}

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers:{
        SET_LANGUAGE_SELECTED:(state, action: PayloadAction<string>)=>{
            const { payload } = action
            state.languageSelected =  payload
        },
        SET_LANGUAGE_LIST:(state, actions)=>{
            const {payload} = actions
            state.language = state.languageList.filter(({name})=>name === payload)[0]
        },
        SET_LANGUAGE_SWITCH:(state, actions: PayloadAction<boolean>)=>{
            const {payload} = actions
            state.languageSwitch = payload
        },
        CHANGE_LANGUAGE:(state, actions)=>{
            const {payload} = actions
            state.languageList.map((item)=>{
                item.name === payload ? (item.selected = true, state.language = item) : item.selected = false
            })
            state.languageSelected = payload
        } 
    },
})

const { actions, reducer } = languageSlice
export const { SET_LANGUAGE_SELECTED, SET_LANGUAGE_LIST, SET_LANGUAGE_SWITCH, CHANGE_LANGUAGE } = actions
export const LanguageReducer = (state: ILanguageState) => state.languageList
export default languageSlice.reducer