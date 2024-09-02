import { ReactNode } from "react";
import { useAppSelector } from "../redux/hooks";
import { selectUser } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
    children: ReactNode;
}

const PublicRoute: React.FC<PublicRouteProps> = ({ children }) => {
    const { data } = useAppSelector(selectUser);
    const isLoggedIn = !!data._id;
    
    return isLoggedIn ? <Navigate to="/" replace /> : <>{children}</>;
};

export default PublicRoute;
