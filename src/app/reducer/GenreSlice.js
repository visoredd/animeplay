import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    season: "FALL",
    year: 2022,
    genre: [],
  },
};

export const genreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    submitGenre: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { submitGenre } = genreSlice.actions;

export default genreSlice.reducer;
