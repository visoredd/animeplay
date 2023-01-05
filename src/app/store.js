import { configureStore } from "@reduxjs/toolkit";
import animeSlice from "./reducer/AnimeSlice";
import genreSlice from "./reducer/GenreSlice";

export const store = configureStore({
  reducer: {
    genre: genreSlice,
    anime: animeSlice,
  },
});
