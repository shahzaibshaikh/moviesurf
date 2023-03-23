import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// Interfaces
interface ShowData {
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

export interface ShowResults {
  Search: ShowData[];
  totalResults: string;
  Response: string;
}

export interface ShowState {
  loading: boolean;
  error: Error | null;
  data: ShowResults | null;
}

const initialState: ShowState = {
  loading: false,
  error: null,
  data: null
};

// Slices

const showsSlice = createSlice({
  name: 'shows',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<Error>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<ShowResults>) => {
      state.data = action.payload;
    }
  }
});

export const { setLoading, setError, setData } = showsSlice.actions;
export default showsSlice.reducer;
