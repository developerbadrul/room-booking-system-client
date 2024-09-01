import { baseApi } from "../../api/baseApi";

const roomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRooms: builder.query({
            query: () => ({
                url: '/rooms',
                method: 'GET',
            }),
            providesTags: ["rooms"]
        }),

        getSingleRoom: builder.query({
            query: (params) => ({
                url: `/rooms/${params}`,
                method: "GET",
                params: params
            })
        })
    }),
});

export const { useGetAllRoomsQuery, useGetSingleRoomQuery } = roomApi;
