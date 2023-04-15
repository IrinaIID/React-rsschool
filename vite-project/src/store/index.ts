import { configureStore } from '@reduxjs/toolkit';
import cardsFormReducer from './cardsFormSlice';

export const store= configureStore({
  reducer: {
    cardsFrom: cardsFormReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch