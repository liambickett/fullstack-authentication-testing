import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
  endpoints(builder) {
    return {
      getUser: builder.query({
        providesTags: ['user'],
        query: () => {
          return {
            url: '/api/auth_user',
            params: '',
            method: 'GET',
          };
        },
      }),
    };
  },
});

export const { useGetUserQuery } = authApi;
export { authApi };
