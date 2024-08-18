import { apiUrls } from "@/constants/apiUrls/apiUrls";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { IContactsItem } from "@/interfaces/main/main.interface";

interface IResponce {
  contacts: {},
  error: string,
  status: string,
  message: string
}

export const fetchContacts = createAsyncThunk(
  "contacts",
  async (contacts, thunkApi) => {
    try {
      const response = await axios.get(apiUrls.contactUrl);
      if (response.status >= 400) {
        return thunkApi.rejectWithValue(response.data.message);
      }
        return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);


type Status = "idle" | "loading" | "succeeded" | "failed";

type TTest = {
  /* test: string; */
  status: Status;
  error: null | string;
};

interface IContacts {
    contacts: [IContactsItem] | [],
    status: string,
    error: string | null | undefined
};

const initialState: IContacts = {
    contacts: [],
    status: "idle",
    error: null,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
      .addCase(fetchContacts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.contacts = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = contactsSlice;
export const ContactsReducer = (state: any) => state.test;
export default contactsSlice.reducer;
