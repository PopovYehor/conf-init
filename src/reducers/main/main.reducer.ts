
import { apiUrls, languageParameter } from "@/constants/apiUrls/apiUrls"
import { defaultMain } from "@/constants/mainItemsDefault/mainItemsDefault"
import { IMain } from "@/interfaces/main/main.interface"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"


export const fetchMain = createAsyncThunk<any, string>('main', async (language, thunkApi)=>{
    try{
        const response = await axios.get(apiUrls.mainUrl+languageParameter+language)
        if (response.status >= 400){
            return thunkApi.rejectWithValue(response.data.message)
        }
        return response.data[0]
    }catch(error: any){
        return thunkApi.rejectWithValue(error)
    }
})

interface IMainState {
    main: IMain
    status: string
    error: string|null|undefined
}

const initialState: IMainState = {
    main: defaultMain,
    status: 'idle',
    error: null
}

const mainSlice = createSlice({
    name: 'main',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchMain.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchMain.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.main = action.payload;
          })
          .addCase(fetchMain.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
          })
    }
})

const { actions, reducer } = mainSlice
export const MainReducer = (state: IMainState) => state.main
export default mainSlice.reducer