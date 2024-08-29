import { Link } from "react-router-dom";
import { IRoom } from "../../types";

interface CardProps {
    room: IRoom;
}

const Card: React.FC<CardProps> = ({ room }) => {
    return (
        <div key={room._id} className="group text-sm">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                {/* <img
                    src="/path/to/default-image.jpg" // Replace with an actual image path or room.image if available
                    alt={room.name}
                    className="h-full w-full object-cover object-center"
                /> */}
            </div>
            <h3 className="mt-4 font-medium text-gray-900">{room.name}</h3>
            <p className="italic text-gray-500">Room No: {room.roomNo}</p>
            <p className="text-gray-500">Floor No: {room.floorNo}</p>
            <p className="text-gray-500">Capacity: {room.capacity}</p>
            <p className="mt-2 font-medium text-gray-900">${room.pricePerSlot.toFixed(2)} per slot</p>
            <div className="flex items-center mt-2">
                <p className="text-gray-500">Amenities: {room.amenities.join(", ")}</p>
            </div>
            <Link
                to={`/room-details/${room._id}`}
                className="mt-4 w-full text-center inline-block rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
                See Details
            </Link>
        </div>
    );
};

export default Card;
