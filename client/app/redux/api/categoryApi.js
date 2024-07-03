import { apiSlice } from "./apiSlice";

const categoryApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    category: builder.query({
      query: () => "/category",
      providesTags: ["categories"],
    }),
    addCategory: builder.mutation({
      query: (data) => ({
        url: "/create/category",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["categories"],
    }),
    delCategory: builder.query({
      query: (id) => `/category/delete/${id}`,
      invalidatesTags: ["categories"],
    }),
  }),
});

export const { useCategoryQuery, useAddCategoryMutation, useDelCategoryQuery } =
  categoryApi;
