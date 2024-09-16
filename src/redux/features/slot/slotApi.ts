/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

export const slotApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAvailabilitySlots: builder.query({
            query: () => '/slots/availability',
            transformResponse: (response: { data: any[] }) => response.data,
        }),
        createSlot: builder.mutation({
            query: (newSlot) => ({
                url: '/slots',
                method: 'POST',
                body: newSlot,
            }),
        }),
    }),
    // Optionally include `baseQuery` or `endpoints` configuration here if needed
});

export const { useGetAvailabilitySlotsQuery, useCreateSlotMutation } = slotApi;
