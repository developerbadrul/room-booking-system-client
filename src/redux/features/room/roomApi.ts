import { baseApi } from "../../api/baseApi";

const roomApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllRooms: builder.query({
            query: () => ({
                url: '/rooms',
                method: 'GET',
            }),
            providesTags: ["rooms"],
        }),

        getSingleRoom: builder.query({
            query: (id) => ({
                url: `/rooms/${id}`,
                method: "GET",
            }),
            // providesTags: (result, error, id) => [{ type: "Room", id }],
        }),

        createRoom: builder.mutation({
            query: (data) => ({
                url: `/rooms`,
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["rooms"],
        }),
    }),
});

export const {
    useGetAllRoomsQuery,
    useGetSingleRoomQuery,
    useCreateRoomMutation,
} = roomApi;

export default roomApi;
