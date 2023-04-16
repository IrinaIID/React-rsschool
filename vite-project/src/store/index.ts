import { configureStore } from '@reduxjs/toolkit';
import cardsFormReducer from './cardsFormSlice';
import { cardsMainApi } from './cardsMainApi';
import textInputReduser from './textInputSlice';

export const store = configureStore({
  reducer: {
    textInput: textInputReduser,
    cardsFrom: cardsFormReducer,
    cardsMainApi: cardsMainApi.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(cardsMainApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
