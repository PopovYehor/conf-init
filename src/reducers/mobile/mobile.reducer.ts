import { createSlice, PayloadAction } from "@reduxjs/toolkit";


type StatusMobile = 'start' | null

interface IMobile{
    mobile: boolean
    status: StatusMobile
}

const initialState: IMobile = {
    mobile: false,
    status: null
}

const mobileSlice = createSlice({
    name: 'mobile',
    initialState,
    reducers:{
        SET_MOBILE:(state, action: PayloadAction<boolean>)=>{
            const { payload } = action
            state.mobile =  payload
            state.status = 'start'
        },
    },
})

const { actions, reducer } = mobileSlice
export const { SET_MOBILE } = actions
export const MobileReducer = (state: IMobile) => state.mobile
export default mobileSlice.reducer