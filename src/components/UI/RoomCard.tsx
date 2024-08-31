import { Link } from 'react-router-dom';
import { IRoom } from "./../../types"

interface RoomCardProps {
    room: IRoom;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
    return (
        <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="relative h-72 w-full overflow-hidden">
                <img
                    src={room?.image}
                    alt={room.name}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="p-4">
                <h3 className="text-sm font-medium text-gray-900">{room.name}</h3>
                <p className="text-sm text-gray-500">Room No: {room.roomNo}</p>
                <p className="text-sm text-gray-500">Floor No: {room.floorNo}</p>
                <p className="text-lg font-semibold text-gray-900">${room.pricePerSlot}</p>
                <div className="flex items-center mt-2">
                    <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                            <svg
                                key={i}
                                className={`h-5 w-5 ${i < (room?.rating || 0) ? 'text-yellow-400' : 'text-yellow-400'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.357 4.158a1 1 0 00.95.69h4.36c.969 0 1.371 1.24.588 1.81l-3.53 2.56a1 1 0 00-.364 1.118l1.357 4.158c.3.921-.755 1.688-1.54 1.118l-3.53-2.56a1 1 0 00-1.176 0l-3.53 2.56c-.784.57-1.838-.197-1.54-1.118l1.357-4.158a1 1 0 00-.364-1.118L2.83 9.585c-.783-.57-.38-1.81.588-1.81h4.36a1 1 0 00.95-.69l1.357-4.158z" />
                            </svg>
                        ))}
                    </div>
                    {/* <span className="ml-2 text-sm text-gray-500">({room.rating || 'N/A'})</span> */}
                </div>
                <div className="mt-4">
                    <Link
                        to={`/meeting-room/${room._id}`}
                        className="relative flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-8 py-2 text-sm font-medium text-white hover:bg-gray-200 hover:text-black"
                    >
                        Show Details<span className="sr-only">, {room.name}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RoomCard;
