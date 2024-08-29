import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://assignment-3-p-hero.vercel.app/api",
        // baseUrl: "http://localhost:3000/api",
        // credentials: 'include',
    }),
    tagTypes: ["rooms"],
    endpoints: () => ({}),
})


