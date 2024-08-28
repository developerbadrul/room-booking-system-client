import { createBrowserRouter } from "react-router-dom";
import App from "../App";
// import Home from "../Pages/Home";
// import About from "../Pages/About";
// import Contact from "../Pages/Contact";
// import MeetingRoom from "../Pages/MeetingRoom";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ErrorPage from "../Pages/ErrorPage";
import publicRoutes from "./public-routes";
import AdminLayout from "../components/Layouts/AdminLayout";
import adminRoutes from "./admin-routes";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: publicRoutes

    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: adminRoutes
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <Signup />
    }
])


export default router;