import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USERS } from "../constant/userDataContant";

export const userDataApi = createApi({
  reducerPath: "userDataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://user-list-server-node-ak.vercel.app/users`,
  }),
  endpoints: (builder) => ({
    getUserData: builder.query<USERS, number>({
      query: (page) => `/p?limit=10&page=${page}`,
    }),
  }),
});

export const { useGetUserDataQuery } = userDataApi;
