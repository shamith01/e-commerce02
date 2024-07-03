import { apiSlice } from "./apiSlice";

const prodApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProd: builder.query({
      query: () => "/products",
      providesTags: ["products"],
    }),
    addProd: builder.mutation({
      query: (data) => ({
        url: "/create/products",
        method: "POST",
        body: data,
      }),
      invalidatesTags:["products"]
    }),
    delProd: builder.query({
        query: (id) => `/product/delete/${id}`,
        invalidatesTags:["products"]
    }),
  }),
});

export const { useGetProdQuery, useAddProdMutation,useDelProdQuery } = prodApi;
