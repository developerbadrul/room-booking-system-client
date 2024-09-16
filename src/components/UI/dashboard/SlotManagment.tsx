/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid';
import { useGetAvailabilitySlotsQuery } from '../../../redux/features/slot/slotApi';
import CreateSlotModal from './CreateSlotModal';


const getRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Utility function to get the first 4 letters of the room ID
const getRoomNumber = (roomId: any): string => {
    if (typeof roomId === 'string') {
        return roomId.substring(0, 4);
    }
    return ''; // Return an empty string if roomId is not a string
};

const SlotManagement = () => {
    const { data: slots, isLoading, isError } = useGetAvailabilitySlotsQuery({});
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    if (isLoading) return <p>Loading slots...</p>;

    if (isError) return <p className="text-red-500">Failed to load slots.</p>;

    // Ensure that slots is not undefined
    const slotData = slots || [];

    // Group slots by room
    const groupedSlots = slotData.reduce<Record<string, any[]>>((acc, slot) => {
        const roomId = slot.room;
        if (roomId) {
            const roomIdStr = String(roomId); // Ensure roomId is a string
            if (!acc[roomIdStr]) {
                acc[roomIdStr] = [];
            }
            acc[roomIdStr].push(slot);
        }
        return acc;
    }, {});

    return (
        <div>
            <h2 className="text-sm font-medium text-gray-500">Available Slots</h2>
            <button
                onClick={handleOpenModal}
                className="mb-4 px-4 py-2 bg-indigo-500 text-white rounded"
            >
                Create Slot
            </button>
            {Object.entries(groupedSlots).map(([roomId, roomSlots]) => (
                <div key={roomId} className="mb-6">
                    <h3 className="text-lg font-medium text-gray-700">Room: {getRoomNumber(roomId)}</h3>
                    <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
                        {roomSlots.map((slot) => (
                            <li key={slot._id} className="col-span-1 flex rounded-md shadow-sm">
                                <div
                                    className="flex w-16 flex-shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white"
                                    style={{ backgroundColor: getRandomColor() }}
                                >
                                    {getRoomNumber(slot.room)}
                                </div>
                                <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 bg-white">
                                    <div className="flex-1 truncate px-4 py-2 text-sm">
                                        <p className="font-medium text-gray-900">{`Room No: ${getRoomNumber(slot.room)}`}</p>
                                        <p className="text-gray-500">{`Date: ${slot.date || 'N/A'}`}</p>
                                        <p className="text-gray-500">{`Time: ${slot.startTime || 'N/A'} - ${slot.endTime || 'N/A'}`}</p>
                                    </div>
                                    <div className="flex-shrink-0 pr-2">
                                        <button
                                            type="button"
                                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            <span className="sr-only">Open options</span>
                                            <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
                                        </button>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
            <CreateSlotModal isOpen={isModalOpen} onClose={handleCloseModal} />
        </div>
    );
};

export default SlotManagement;
