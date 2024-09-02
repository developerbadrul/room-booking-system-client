import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import ErrorPage from "../Pages/ErrorPage";
import publicRoutes from "./public-routes";
import PrivateRoute from "./PrivateRoute";
import dashboardRoutes from "./dashboard-routes";
import Dashboard from "../components/Layouts/DashboardLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: publicRoutes

    },
    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: dashboardRoutes
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