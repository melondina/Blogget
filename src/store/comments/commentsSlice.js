import { createSlice } from '@reduxjs/toolkit';
import { commentsRequestAsync } from './action.js';

const initialState = {
  loading: false,
  comments: [],
  error: '',
  dina: 'dina',
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    // commentsRequest: (state) => {
    //   state.loading = true;
    //   state.error = '';
    // },

    // commentsRequestSuccess: (state, action) => {
    //   state.comments = action.payload.comments;
    //   state.loading = false;
    //   state.error = '';
    // },
    // commentsRequestError: (state, action) => {
    //   state.loading = false;
    //   state.error = action.error;
    // },
  },
  // extraReducers: {
  //   [commentsRequestAsync.pending.type]: (state) => {
  //     state.loading = true;
  //     state.error = '';
  //   },
  //   [commentsRequestAsync.fulfilled.type]: (state, action) => {
  //     state.comments = action.payload.comments;
  //     state.loading = false;
  //     state.error = '';
  //   },
  //   [commentsRequestAsync.rejected.type]: (state, action) => {
  //     state.loading = false;
  //     state.error = action.payload.error;
  //   },
  // }
  extraReducers: builder => {
    builder
      .addCase(commentsRequestAsync.pending, (state) => {
        state.loading = true;
        state.error = '';
      })
      .addCase(commentsRequestAsync.fulfilled, (state, action) => {
        state.comments = action.payload.comments;
        state.loading = false;
        state.error = '';
      })
      .addCase(commentsRequestAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },

});
export default commentsSlice.reducer;
