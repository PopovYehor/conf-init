import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from "axios"

const API_URL = 'http://localhost:3000/db.json'

interface IResponce{
    test: {text: string}
    message: string
}

export const fetchTest= createAsyncThunk('test', async (test, thunkApi)=>{
    try{
        const response = await axios.get<IResponce>(API_URL)
        if (response.status >= 400){
            return thunkApi.rejectWithValue(response.data.message)
        }
        return response.data.test.text
    }catch(error){
        return thunkApi.rejectWithValue(error)
    }
})

interface ITest{
    test:string
    status: string
    error: string|null|undefined
}  

type Status = 'idle'| 'loading' | 'succeeded' | 'failed'

type TTest = {
    test:string
    status: Status
    error: null | string
}

const initialState: ITest = {
    test: 'Hello World Test',
    status: 'idle',
    error: null
} satisfies TTest

const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers:{
        SET_TEST:(state, action: PayloadAction<string>)=>{
            const { payload } = action
            state.test =  payload
        }
    },
    extraReducers(builder){
        builder
        .addCase(fetchTest.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchTest.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.test = action.payload;
          })
          .addCase(fetchTest.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
          })
    }
})

const { actions, reducer } = testSlice
export const { SET_TEST } = actions
export const TestReducer = (state: ITest) => state.test
export default testSlice.reducer