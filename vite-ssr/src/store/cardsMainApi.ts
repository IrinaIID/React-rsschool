import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const cardsMainApi = createApi({
  reducerPath: 'cardsMainApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api/character' }),
  endpoints: (build) => ({
    getCardsMain: build.query({
      query: (text: string) => `?${text && `name=${text}`}`,
    }),
  }),
});

export const { useGetCardsMainQuery } = cardsMainApi;
