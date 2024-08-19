import { apiUrls } from "@/constants/apiUrls/apiUrls"
import { IImageItem } from "@/interfaces/image/image.interfaces"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchImage= createAsyncThunk('image', async (image, thunkApi)=>{
    try{
        const response = await axios.get(apiUrls.imageUrl)
        if (response.status >= 400){
            return thunkApi.rejectWithValue(response.data.message)
        }
        console.log(response.data)
        return response.data
    }catch(error){
        return thunkApi.rejectWithValue(error)
    }
})

interface IImageState {
    image: Array<IImageItem>
    status: string
    error: string|null|undefined
}

export const defaultImage = {
    _id: "",
    url: "https://fotobym.com.ua/uploads/images/product/480/f37e95c0a03b0b49c82e71bdb81494a3.jpg",
    description: "Not Found Image",
    __v: 0
}

const initialState: IImageState = {
    image: [defaultImage],
    status: 'idle',
    error: null
}

const imageSlice = createSlice({
    name: 'image',
    initialState,
    reducers:{},
    extraReducers(builder){
        builder
        .addCase(fetchImage.pending, (state, action) => {
            state.status = 'loading'
          })
          .addCase(fetchImage.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.image = action.payload;
          })
          .addCase(fetchImage.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message
          })
    }
})

const { actions, reducer } = imageSlice
export const ImageReducer = (state: IImageState) => state.image
export default imageSlice.reducer