import { createAsyncThunk } from "@reduxjs/toolkit"


export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, thunkAPI) => {
    try {
      
    } catch (error) {
      console.log("category", error);
      return thunkAPI.fulfillWithValue
    }
  }
)

const initialState = {
  list: [],
}

