import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import apiClient from '../../services/api-client';
// Interfaces
interface MovieData {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
}

export interface Error {
  Response: string;
  Error: string;
}

export interface MovieResults {
  Search: MovieData[];
  totalResults: string;
  Response: string;
}

export interface MovieState {
  loading: boolean;
  error: Error | null;
  data: MovieResults | null;
}

const initialState: MovieState = {
  loading: false,
  error: null,
  data: null
};

// Slices

const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<MovieResults>) => {
      state.data = action.payload;
    }
  }
});

export const { setLoading, setError, setData } = movieSlice.actions;
export default movieSlice.reducer;
