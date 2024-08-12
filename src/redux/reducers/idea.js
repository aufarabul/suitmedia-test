import { createSlice } from "@reduxjs/toolkit";
import { fetchIdeas } from "../action/idea";

const ideasSlice = createSlice({
  name: "ideas",
  initialState: {
    items: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchIdeas.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchIdeas.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload.data; // assuming the response has a `data` field
      })
      .addCase(fetchIdeas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload || "Failed to fetch data";
      });
  },
});

export default ideasSlice.reducer;
