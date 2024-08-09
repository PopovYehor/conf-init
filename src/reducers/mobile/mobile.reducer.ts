import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMobile{
    mobile: boolean
}

const initialState: IMobile = {
    mobile: false
}

const mobileSlice = createSlice({
    name: 'mobile',
    initialState,
    reducers:{
        SET_MOBILE:(state, action: PayloadAction<boolean>)=>{
            const { payload } = action
            state.mobile =  payload
        },
    },
})

const { actions, reducer } = mobileSlice
export const { SET_MOBILE } = actions
export const MobileReducer = (state: IMobile) => state.mobile
export default mobileSlice.reducer