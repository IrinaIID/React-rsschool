import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const modalApi = createApi({
  reducerPath: 'modalApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://rickandmortyapi.com/api/character',
    fetchFn: fetch,
   }),
  endpoints: (build) => ({
    getModalCard: build.query({
      query: (id: number) => `/${id}`,
    }),
  }),
});

export const { useGetModalCardQuery } = modalApi;
