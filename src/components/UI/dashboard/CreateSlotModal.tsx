import React, { useState } from 'react';
import { useCreateSlotMutation } from '../../../redux/features/slot/slotApi';
import { useGetAllRoomsQuery } from '../../../redux/features/room/roomApi';

interface CreateSlotModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateSlotModal: React.FC<CreateSlotModalProps> = ({ isOpen, onClose }) => {
  const [createSlot] = useCreateSlotMutation();
  const { data: rooms = [], isLoading: roomsLoading, isError: roomsError } = useGetAllRoomsQuery();
  const [selectedRoom, setSelectedRoom] = useState<string>('');
  const [date, setDate] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createSlot({ room: selectedRoom, date, startTime, endTime }).unwrap();
      onClose(); // Close modal on success
    } catch (error) {
      console.error("Error creating slot", error);
    }
  };

  if (!isOpen) return null;

  if (roomsLoading) return <p>Loading rooms...</p>;

  if (roomsError) return <p className="text-red-500">Failed to load rooms.</p>;

  // Check if rooms is an array
  if (!Array.isArray(rooms)) {
    console.error('Expected rooms to be an array, but got:', rooms);
    return <p className="text-red-500">Error: Invalid data format.</p>;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center p-4 bg-gray-500 bg-opacity-75">
      <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-lg font-medium mb-4">Create Slot</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="room" className="block text-sm font-medium text-gray-700">Room</label>
            <select
              id="room"
              value={selectedRoom}
              onChange={(e) => setSelectedRoom(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            >
              <option value="">Select a room</option>
              {rooms.map((room) => (
                <option key={room._id} value={room._id}>
                  {room.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Start Time</label>
            <input
              type="time"
              id="startTime"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">End Time</label>
            <input
              type="time"
              id="endTime"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="mr-4 px-4 py-2 bg-gray-500 text-white rounded"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-500 text-white rounded"
            >
              Create Slot
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSlotModal;
