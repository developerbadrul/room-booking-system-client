import { useGetAllRoomsQuery } from "../../../redux/features/room/roomApi";
import { IRoom } from "../../../types";
import Card from "../Card";
import Loading from "../Loading";

export default function FeatureService() {
    const { data, error, isLoading } = useGetAllRoomsQuery(); // Removed empty object

    if (isLoading) return <div className="flex items-center justify-center"><Loading /></div>;

    if (error) {
        // Handling error more gracefully
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        return <div>Error: {errorMessage}</div>;
    }

    // Checking if the response has data and it is not empty
    if (!data || data.length === 0) {
        return <div>No rooms found</div>;
    }

    console.log("Rooms", data);

    // Assuming `data` is directly an array of IRoom
    const rooms: IRoom[] = data.data;

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl overflow-hidden px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 className="text-2xl mb-4 font-bold tracking-tight text-gray-900">Feature Rooms</h2>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
                    {rooms.slice(0,3).map((room) => (
                        <Card key={room._id} room={room} />
                    ))}
                </div>
            </div>
        </div>
    );
}
