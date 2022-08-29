import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  status: null,
  reducers: {
    getSearchTerm: (state, action) => {
      const searchTerm = action.payload;
      return { ...state, searchTerm };
    },
  },
});

export const { getSearchTerm } = searchSlice.actions;

export default searchSlice.reducer;
