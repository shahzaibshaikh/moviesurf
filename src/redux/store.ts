import { configureStore } from '@reduxjs/toolkit';
import movieReducer from './slices/movieSlice';
import showsReducer from './slices/showsSlice';

export const store = configureStore({
  reducer: {
    movies: movieReducer,
    shows: showsReducer
  }
});
