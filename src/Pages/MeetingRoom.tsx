import { useParams } from "react-router-dom";
import { useGetSingleRoomQuery } from "../redux/features/room/roomApi";
import { QuestionMarkCircleIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";
import Loading from "../components/UI/Loading";

const MeetingRoom = () => {
    const { roomId } = useParams();
    const { data: response, error, isLoading } = useGetSingleRoomQuery(roomId);

    if (isLoading) return <div className="flex items-center justify-center"><Loading /></div>;
    if (error) {
        const errorMessage = typeof error === 'string' ? error : 'An error occurred';
        return <div className="text-center text-red-500 text-3xl font-bold">Error: {errorMessage}</div>;
    }

    const room = response?.data;

    if (!room) return <div className="text-center text-blue-500 text-3xl font-bold">Room Not Found</div>;

    const { name, roomNo, floorNo, capacity, pricePerSlot, amenities } = room;

    const getRandomBgClass = () => {
        const colors = ["bg-red-200", "bg-blue-200", "bg-green-200", "bg-yellow-200", "bg-purple-200", "bg-pink-200"];
        return colors[Math.floor(Math.random() * colors.length)];
    };

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                {/* room details */}
                <div className="lg:max-w-lg lg:self-end">
                    <nav aria-label="Breadcrumb">
                        <ol role="list" className="flex items-center space-x-2">
                            <li>
                                <svg
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                    className="ml-2 h-5 w-5 flex-shrink-0 text-gray-300"
                                >
                                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                                </svg>
                            </li>
                        </ol>
                    </nav>

                    <div className="mt-4">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{name}</h1>
                        <p className="text-lg text-gray-500">Room No: {roomNo}</p>
                        <p className="text-lg text-gray-500">Floor: {floorNo}</p>
                        <p className="text-lg text-gray-500">Capacity: {capacity} people</p>
                        <p className="text-lg text-gray-500">Price per Slot: ${pricePerSlot}</p>

                        <div className="mt-4">
                            
                            <div className="mt-2 flex flex-wrap gap-2">
                            <h3 className="text-lg font-medium text-gray-900">Amenities</h3>
                                {Array.isArray(amenities) && amenities.length > 0 ? (
                                    amenities.map((amenity, index) => (
                                        <span
                                            key={index}
                                            className={`inline-block px-3 py-1 text-sm font-medium text-gray-900 rounded-lg ${getRandomBgClass()}`}
                                        >
                                            {amenity}
                                        </span>
                                    ))
                                ) : (
                                    <p className="text-sm text-gray-500">No amenities available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Placeholder for room image */}
                <div className="mt-10 lg:col-start-2 lg:row-span-2 lg:mt-0 lg:self-center">
                    <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
                        <p className="text-gray-500">Room Image</p>
                    </div>
                </div>

                {/* room booking form */}
                <div className="mt-10 lg:col-start-1 lg:row-start-2 lg:max-w-lg lg:self-start">
                    <section aria-labelledby="options-heading">
                        <h2 id="options-heading" className="sr-only">
                            Room Booking Options
                        </h2>

                        <form>
                            <div className="mt-4">
                                <a href="#" className="group inline-flex text-sm text-gray-500 hover:text-gray-700">
                                    <span>What amenities does this room offer?</span>
                                    <QuestionMarkCircleIcon
                                        className="ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </a>
                            </div>

                            <div className="mt-10">
                                <button
                                    type="submit"
                                    className="flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                >
                                    Book Room
                                </button>
                            </div>

                            <div className="mt-6 text-center">
                                <a href="#" className="group inline-flex text-base font-medium">
                                    <ShieldCheckIcon
                                        className="mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                    <span className="text-gray-500 hover:text-gray-700">Secure Booking</span>
                                </a>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default MeetingRoom;
