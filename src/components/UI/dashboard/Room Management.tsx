import { useState } from 'react';
import { useGetAllRoomsQuery, useCreateRoomMutation, useUpdateRoomMutation, useDeleteRoomMutation } from "../../../redux/features/room/roomApi";
import { IRoom } from "../../../types";
import Loading from "../Loading";
import { Dialog } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

export default function RoomManagement() {
    const { data, error, isLoading, refetch } = useGetAllRoomsQuery();
    const [createRoom] = useCreateRoomMutation();
    const [updateRoom] = useUpdateRoomMutation();
    const [deleteRoom] = useDeleteRoomMutation();
    
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [currentRoom, setCurrentRoom] = useState<IRoom | null>(null);
    const [actionType, setActionType] = useState<'create' | 'update' | 'delete' | null>(null);
    const [roomData, setRoomData] = useState({
        name: '',
        roomNo: '',
        floorNo: '',
        capacity: '',
        pricePerSlot: '',
        amenities: [] as string[],
        imageUrl: '',
    });

    const handleOpenDialog = (type: 'create' | 'update' | 'delete', room: IRoom | null = null) => {
        setActionType(type);
        setCurrentRoom(room);
        if (room) {
            setRoomData({
                name: room.name,
                roomNo: room.roomNo.toString(),
                floorNo: room.floorNo.toString(),
                capacity: room.capacity.toString(),
                pricePerSlot: room.pricePerSlot.toString(),
                amenities: room.amenities,
                imageUrl: room.imageUrl || '',
            });
        } else {
            setRoomData({
                name: '',
                roomNo: '',
                floorNo: '',
                capacity: '',
                pricePerSlot: '',
                amenities: [],
                imageUrl: '',
            });
        }
        setIsDialogOpen(true);
    };

    const handleCloseDialog = () => {
        setIsDialogOpen(false);
        setCurrentRoom(null);
    };

    const handleCreateRoom = async () => {
        try {
            await createRoom({
                name: roomData.name,
                roomNo: parseInt(roomData.roomNo),
                floorNo: parseInt(roomData.floorNo),
                capacity: parseInt(roomData.capacity),
                pricePerSlot: parseInt(roomData.pricePerSlot),
                amenities: roomData.amenities,
                imageUrl: roomData.imageUrl,
            }).unwrap();
            toast.success("Room created successfully!");
            await refetch(); // Refetch data to update UI
            handleCloseDialog();
        } catch (err) {
            toast.error("Error creating room");
            console.error(err);
        }
    };

    const handleUpdateRoom = async () => {
        if (currentRoom) {
            try {
                await updateRoom({
                    id: currentRoom._id,
                    data: {
                        name: roomData.name,
                        pricePerSlot: parseInt(roomData.pricePerSlot),
                        amenities: roomData.amenities,
                        imageUrl: roomData.imageUrl,
                    },
                }).unwrap();
                toast.success("Room updated successfully!");
                await refetch(); // Refetch data to update UI
                handleCloseDialog();
            } catch (err) {
                toast.error("Error updating room");
                console.error(err);
            }
        }
    };

    const handleDeleteRoom = async () => {
        if (currentRoom) {
            try {
                await deleteRoom(currentRoom._id).unwrap();
                toast.success("Room deleted successfully!");
                await refetch(); // Refetch data to update UI
                handleCloseDialog();
            } catch (err) {
                toast.error("Error deleting room");
                console.error(err);
            }
        }
    };

    if (isLoading) return <div className="flex items-center justify-center"><Loading /></div>;

    if (error) {
        const errorMessage = error instanceof Error ? error.message : 'An error occurred';
        return <div>Error: {errorMessage}</div>;
    }

    return (
        <div className="px-4 sm:px-6 lg:px-8">
            <div className="sm:flex sm:items-center">
                <div className="sm:flex-auto">
                    <h1 className="text-base font-semibold leading-6 text-gray-900">Rooms</h1>
                    <p className="mt-2 text-sm text-gray-700">
                        A list of all the rooms including their details.
                    </p>
                </div>
                <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                    <button
                        type="button"
                        onClick={() => handleOpenDialog('create')}
                        className="block rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Add Room
                    </button>
                </div>
            </div>
            <div className="mt-8 flow-root">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-300">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                            Name
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Room No
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Floor No
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Capacity
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Price Per Slot
                                        </th>
                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                            Amenities
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                            <span className="sr-only">Actions</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                    {data?.data?.map((room: IRoom) => (
                                        <tr key={room._id}>
                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                                                {room.name}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {room.roomNo}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {room.floorNo}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {room.capacity}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {room.pricePerSlot}
                                            </td>
                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                                {room.amenities.join(', ')}
                                            </td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                <button
                                                    onClick={() => handleOpenDialog('update', room)}
                                                    className="text-indigo-600 hover:text-indigo-900"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleOpenDialog('delete', room)}
                                                    className="ml-4 text-red-600 hover:text-red-900"
                                                >
                                                    Delete
                                                </button>
                                                <Link
                                                    to={`/meeting-room/${room._id}`}
                                                    className="ml-4 text-blue-600 hover:text-blue-900"
                                                >
                                                    Room Details
                                                </Link>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog open={isDialogOpen} onClose={handleCloseDialog} className="relative z-10">
                <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
                <div className="fixed inset-0 flex items-center justify-center p-4">
                    <Dialog.Panel className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                        <div className="absolute top-4 right-4">
                            <button
                                type="button"
                                className="text-gray-400 hover:text-gray-500"
                                onClick={handleCloseDialog}
                            >
                                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                        </div>
                        {actionType === 'create' && (
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Add Room</h3>
                                <div className="mt-2">
                                    {/* Form for creating room */}
                                    <div className="grid grid-cols-1 gap-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={roomData.name}
                                                onChange={(e) => setRoomData({ ...roomData, name: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="roomNo" className="block text-sm font-medium text-gray-700">
                                                Room No
                                            </label>
                                            <input
                                                id="roomNo"
                                                name="roomNo"
                                                type="number"
                                                value={roomData.roomNo}
                                                onChange={(e) => setRoomData({ ...roomData, roomNo: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="floorNo" className="block text-sm font-medium text-gray-700">
                                                Floor No
                                            </label>
                                            <input
                                                id="floorNo"
                                                name="floorNo"
                                                type="number"
                                                value={roomData.floorNo}
                                                onChange={(e) => setRoomData({ ...roomData, floorNo: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="capacity" className="block text-sm font-medium text-gray-700">
                                                Capacity
                                            </label>
                                            <input
                                                id="capacity"
                                                name="capacity"
                                                type="number"
                                                value={roomData.capacity}
                                                onChange={(e) => setRoomData({ ...roomData, capacity: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="pricePerSlot" className="block text-sm font-medium text-gray-700">
                                                Price Per Slot
                                            </label>
                                            <input
                                                id="pricePerSlot"
                                                name="pricePerSlot"
                                                type="number"
                                                value={roomData.pricePerSlot}
                                                onChange={(e) => setRoomData({ ...roomData, pricePerSlot: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="amenities" className="block text-sm font-medium text-gray-700">
                                                Amenities (comma-separated)
                                            </label>
                                            <input
                                                id="amenities"
                                                name="amenities"
                                                type="text"
                                                value={roomData.amenities.join(', ')}
                                                onChange={(e) => setRoomData({ ...roomData, amenities: e.target.value.split(',').map(a => a.trim()) })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                                                Image URL
                                            </label>
                                            <input
                                                id="imageUrl"
                                                name="imageUrl"
                                                type="text"
                                                value={roomData.imageUrl}
                                                onChange={(e) => setRoomData({ ...roomData, imageUrl: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-x-4">
                                        <button
                                            type="button"
                                            onClick={handleCreateRoom}
                                            className="inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm ring-1 ring-gray-900 ring-opacity-5 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleCloseDialog}
                                            className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-gray-300 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {actionType === 'update' && currentRoom && (
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Update Room</h3>
                                <div className="mt-2">
                                    {/* Form for updating room */}
                                    <div className="grid grid-cols-1 gap-y-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                name="name"
                                                type="text"
                                                value={roomData.name}
                                                onChange={(e) => setRoomData({ ...roomData, name: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="pricePerSlot" className="block text-sm font-medium text-gray-700">
                                                Price Per Slot
                                            </label>
                                            <input
                                                id="pricePerSlot"
                                                name="pricePerSlot"
                                                type="number"
                                                value={roomData.pricePerSlot}
                                                onChange={(e) => setRoomData({ ...roomData, pricePerSlot: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="amenities" className="block text-sm font-medium text-gray-700">
                                                Amenities (comma-separated)
                                            </label>
                                            <input
                                                id="amenities"
                                                name="amenities"
                                                type="text"
                                                value={roomData.amenities.join(', ')}
                                                onChange={(e) => setRoomData({ ...roomData, amenities: e.target.value.split(',').map(a => a.trim()) })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700">
                                                Image URL
                                            </label>
                                            <input
                                                id="imageUrl"
                                                name="imageUrl"
                                                type="text"
                                                value={roomData.imageUrl}
                                                onChange={(e) => setRoomData({ ...roomData, imageUrl: e.target.value })}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                            />
                                        </div>
                                    </div>
                                    <div className="mt-6 flex gap-x-4">
                                        <button
                                            type="button"
                                            onClick={handleUpdateRoom}
                                            className="inline-flex justify-center rounded-md bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm ring-1 ring-gray-900 ring-opacity-5 hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500"
                                        >
                                            Save
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleCloseDialog}
                                            className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-gray-300 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        {actionType === 'delete' && currentRoom && (
                            <div>
                                <h3 className="text-lg font-medium leading-6 text-gray-900">Delete Room</h3>
                                <div className="mt-2">
                                    <p>Are you sure you want to delete the room "{currentRoom.name}"?</p>
                                    <div className="mt-6 flex gap-x-4">
                                        <button
                                            type="button"
                                            onClick={handleDeleteRoom}
                                            className="inline-flex justify-center rounded-md bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm ring-1 ring-gray-900 ring-opacity-5 hover:bg-red-700 focus:ring-2 focus:ring-red-500"
                                        >
                                            Delete
                                        </button>
                                        <button
                                            type="button"
                                            onClick={handleCloseDialog}
                                            className="inline-flex justify-center rounded-md bg-white px-4 py-2 text-base font-medium text-gray-900 ring-1 ring-gray-300 shadow-sm hover:bg-gray-50 focus:ring-2 focus:ring-indigo-500"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </Dialog.Panel>
                </div>
            </Dialog>
        </div>
    );
}
