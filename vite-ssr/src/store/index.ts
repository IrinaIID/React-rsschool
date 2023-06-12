import { combineReducers, configureStore, PreloadedState } from '@reduxjs/toolkit';
import cardsFormReducer from './cardsFormSlice';
import { cardsMainApi } from './cardsMainApi';
import { modalApi } from './modalApi';
import textInputReduser from './textInputSlice';
import textQuerySlice from './testQuery';

const rootReducer = combineReducers({
  textInput: textInputReduser,
  textQuery: textQuerySlice,
  cardsFrom: cardsFormReducer,
  cardsMainApi: cardsMainApi.reducer,
  modalApi: modalApi.reducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
    middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware().concat(cardsMainApi.middleware, modalApi.middleware),
    devTools: process.env.NODE_ENV !== 'production',
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
