import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
const baseQuery = fetchBaseQuery({ baseUrl: "http://localhost:5000/api",withCredentials:true });

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["products", "categories", "users"],
  endpoints: () => ({}),
});
