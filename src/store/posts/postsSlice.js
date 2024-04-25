import { createSlice } from '@reduxjs/toolkit';
import { postsRequestAsync } from './action.js';

const initialState = {
  loading: false,
  posts: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};


export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(postsRequestAsync.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        state.posts = action.posts;
        state.loading = true;
        state.error = '';
        state.after = action.after;
        state.isLast = !action.after;
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  }
});
export default postsSlice.reducer;
