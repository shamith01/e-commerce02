"use client";

import { apiSlice } from "./apiSlice";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // signup mutation
    signup: builder.mutation({
      query: (data) => ({
        url: "/signup",
        method: "POST",
        body: data,
      }),
      providesTags: ["users"],
    }),
    // login mutation
    login: builder.mutation({
      query: (data) => ({
        url: "/login",
        method: "POST",
        body: data,
      }),
      providesTags: ["users"],
    }),
    // users query
    user: builder.query({
      query: () => "/users",
    }),
  }),
});

export const { useLoginMutation, useSignupMutation, useUserQuery } = authApi;
