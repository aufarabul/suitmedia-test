import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchIdeas = createAsyncThunk(
  "ideas/fetchIdeas",
  async ({ pageNumber, pageSize }, thunkAPI) => {
    try {
      const response = await axios.get("/api/ideas", {
        params: {
          "page[number]": pageNumber,
          "page[size]": pageSize,
          "append[]": ["small_image", "medium_image"],
          sort: "-published_at",
        },
      });
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
