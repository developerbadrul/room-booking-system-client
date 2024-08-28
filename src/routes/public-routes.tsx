import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Home from "../Pages/Home";
import MeetingRoom from "../Pages/MeetingRoom";

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
        path: "meeting-room",
        element: <MeetingRoom />
    },
]

export default publicRoutes;