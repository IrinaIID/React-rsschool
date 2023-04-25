import { createSlice } from '@reduxjs/toolkit';

const textInputSlice = createSlice({
  name: 'textInput',
  initialState: {
    textInput: '',
  },
  reducers: {
    addTextFromInput(state, action) {
      state.textInput = action.payload;
    },
  },
});

export const { addTextFromInput } = textInputSlice.actions;

export default textInputSlice.reducer;
