import About from "../Pages/About";
import AllMeetingRooms from "../Pages/AllMeetingRooms";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import MeetingRoom from "../Pages/MeetingRoom";
import PrivateRoute from "./PrivateRoute";

const publicRoutes = [
    {
        index: true,
        path: "/",
        element: <Home />
    },
    {
        path: "about",
        element: <About />
    },
    {
        path: "contact",
        element: <Contact />
    },
    {
        path: "meeting-room/:roomId",
        element: <MeetingRoom />
    },
    {
        path: "meeting-rooms",
        element: <AllMeetingRooms />
    },
    {
        path: "dashboard",
        element: <PrivateRoute><AllMeetingRooms /></PrivateRoute>
    },
]

export default publicRoutes;