import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {},
};

export const animeSlice = createSlice({
  name: "anime",
  initialState,
  reducers: {
    submitAnime: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { submitAnime } = animeSlice.actions;

export default animeSlice.reducer;
