import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Interfaces
interface Ratings {
  Source: string;
  Value: string;
}
export interface ItemData {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
  Type: string;
  imdbRating: string;
  Metascore: string;
  Actors: string;
  Awards: string;
  Plot: string;
  Language: string;
  Genre: string;
  Director: string;
  Released: string;
  Ratings: Ratings[];
}

export interface Error {
  Response: string;
  Error: string;
}

export interface ItemState {
  loading: boolean;
  error: Error | null;
  data: ItemData | null;
}

const initialState: ItemState = {
  loading: false,
  error: null,
  data: null
};

// Slices

const itemDetailSlice = createSlice({
  name: 'itemDetail',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<ItemData>) => {
      state.data = action.payload;
    }
  }
});

export const { setLoading, setError, setData } = itemDetailSlice.actions;
export default itemDetailSlice.reducer;
