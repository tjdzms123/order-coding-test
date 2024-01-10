import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  lists: [],
  isLoading: false,
  isError: false,
  error: null,
};

export const __getLists = createAsyncThunk(
  'getLists',
  async (payload, thunkAPI) => {
    try {
      const response = await axios.get('http://localhost:3001/items');
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue('error');
    }
  }
);

export const listSlice = createSlice({
  name: 'lists',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(__getLists.pending, state => {
        state.isLoading = true;
      })
      .addCase(__getLists.fulfilled, (state, action) => {
        state.isLoading = false;
        state.lists = action.payload;
      })
      .addCase(__getLists.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.error.message;
      });
  },
});

export default listSlice.reducer;
