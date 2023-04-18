import { configureStore } from '@reduxjs/toolkit';
import cardsFormReducer from './cardsFormSlice';
import { cardsMainApi } from './cardsMainApi';
import { modalApi } from './modalApi';
import textInputReduser from './textInputSlice';
import textQuerySlice from './testQuery';

export const store = configureStore({
  reducer: {
    textInput: textInputReduser,
    textQuery: textQuerySlice,
    cardsFrom: cardsFormReducer,
    cardsMainApi: cardsMainApi.reducer,
    modalApi: modalApi.reducer,
  },
  middleware: (getDefaultMiddlware) =>
    getDefaultMiddlware().concat(cardsMainApi.middleware, modalApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
