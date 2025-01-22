import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: `${import.meta.env.VITE_API_URL}/`,
    baseUrl: "https://ecomerce-cart-api.vercel.app/",
  }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "api/products",
    }),
    singleProduct: builder.query({
      query: (id) => `api/products/${id}`,
    }),
  }),
});

export const { useGetProductsQuery, useSingleProductQuery } = api;