import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '../store';

export const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://assignment-3-p-hero.vercel.app/api",
        prepareHeaders: (headers, { getState }) => {
            const token = (getState() as RootState).auth.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`);
            }
            return headers;
        },
    }),
    tagTypes: ["rooms"],
    endpoints: () => ({}),
});

export default baseApi;
