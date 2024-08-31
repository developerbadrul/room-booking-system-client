import Loading from "../components/UI/Loading";
import RoomCard from "../components/UI/RoomCard";
import { useGetAllRoomsQuery } from "../redux/features/room/roomSlice";
import { IRoom } from "../types";

const AllMeetingRooms = () => {
    const { data: response, error, isLoading } = useGetAllRoomsQuery({});

    if (isLoading) return <div className="flex items-center justify-center"><Loading /></div>;

    if (error) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        return <div>Error: {errorMessage}</div>;
    }

    if (!response || response.length === 0) {
        return <div>No rooms found</div>;
    }

    const rooms: IRoom[] = response.data;

    return (
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">

            <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
                {rooms.map(room => (
                    <RoomCard key={room._id} room={room} />
                ))}
            </div>
        </div>
    );
};

export default AllMeetingRooms;
