import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "bookApi",
  // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000/api" }),
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookstack-server.vercel.app/api",
  }),
  endpoints: () => ({}),
});
