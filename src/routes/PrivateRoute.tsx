import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import Loading from "../components/UI/Loading";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const { data, loading } = useAppSelector(selectUser);
    const isLoggedIn = !!data._id;

    if (loading) {
        return <Loading/>
    }

    return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
