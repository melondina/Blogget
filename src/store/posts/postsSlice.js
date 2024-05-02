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
    changePage: (state, action) => {
      state.page = action.payload.page;
      state.after = '';
      state.isLast = false;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(postsRequestAsync.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(postsRequestAsync.fulfilled, (state, action) => {
        console.log(action.payload);
        state.posts = [...state.posts, ...action.payload.children];
        state.loading = false;
        state.error = '';
        state.after = action.payload.after;
        state.isLast = !action.payload.after;
      })
      .addCase(postsRequestAsync.rejected, (state, action) => {
        state.error = action.error;
        state.loading = false;
      });
  }
});
export default postsSlice.reducer;
