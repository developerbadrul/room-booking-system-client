/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const roomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRooms: builder.query<any, void>({
            query: () => ({
                url: '/rooms',
                method: 'GET',
            }),
            providesTags: ["rooms"],
        }),

        getSingleRoom: builder.query<any, string>({
            query: (id) => ({
                url: `/rooms/${id}`,
                method: "GET",
            }),
            providesTags: (result, error, id) => [{ type: "rooms", id }],
        }),

        createRoom: builder.mutation<any, any>({
            query: (data) => ({
                url: `/rooms`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["rooms"], // Ensure this invalidates the cache for 'rooms'
        }),

        updateRoom: builder.mutation<any, { id: string, data: any }>({
            query: ({ id, data }) => ({
                url: `/rooms/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["rooms"], // Ensure this invalidates the cache for 'rooms'
        }),
        
        deleteRoom: builder.mutation<any, string>({
            query: (id) => ({
                url: `/rooms/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["rooms"], // Ensure this invalidates the cache for 'rooms'
        }),
    }),
});

export const {
    useGetAllRoomsQuery,
    useGetSingleRoomQuery,
    useCreateRoomMutation,
    useUpdateRoomMutation,
    useDeleteRoomMutation,
} = roomApi;

export default roomApi;
