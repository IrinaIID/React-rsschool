import { createSlice } from '@reduxjs/toolkit';

const textQuerySlice = createSlice({
  name: 'textQuery',
  initialState: {
    textQuery: '',
  },
  reducers: {
    addTextQuery(state, action) {
      state.textQuery = action.payload;
    },
  },
});

export const { addTextQuery } = textQuerySlice.actions;

export default textQuerySlice.reducer;
