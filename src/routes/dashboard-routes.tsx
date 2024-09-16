import { HomeIcon, FolderIcon } from '@heroicons/react/24/outline';
import UserData from '../components/UI/dashboard/UserData';
import RoomManagement from '../components/UI/dashboard/Room Management';
import SlotManagment from '../components/UI/dashboard/SlotManagment';

const dashboardRoutes = [
    {
        index: true,
        path: "",
        name: "Dashboard",
        icon: HomeIcon,
        element: <UserData/>,
        current: true,
    },
    {
        path: "room-management",
        name: "Room Management",
        icon: FolderIcon,
        element: <RoomManagement/>,
        current: false,
    },
    {
        path: "slots-management",
        name: "Slots Management",
        icon: FolderIcon,
        element: <SlotManagment/>,
        current: false,
    },
    {
        path: "booking-management",
        name: "Booking Management",
        icon: FolderIcon,
        element: <h1>Booking Management</h1>,
        current: false,
    },
];

export default dashboardRoutes;
