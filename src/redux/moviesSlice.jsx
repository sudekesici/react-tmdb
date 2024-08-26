import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cards: [],
  status: "idle",
  error: null,
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
});

export const {} = moviesSlice.actions;
export default moviesSlice.reducer;
