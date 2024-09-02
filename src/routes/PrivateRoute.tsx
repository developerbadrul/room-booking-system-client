import { ReactNode, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../redux/hooks";
import { selectUser, selectLoading, rehydrateUser } from "../redux/features/auth/authSlice";
import { Navigate } from "react-router-dom";
import Loading from "../components/UI/Loading";

interface PrivateRouteProps {
    children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
    const dispatch = useAppDispatch();
    const data = useAppSelector(selectUser);
    const loading = useAppSelector(selectLoading);

    useEffect(() => {
        dispatch(rehydrateUser());
    }, [dispatch]);

    const isLoggedIn = !!data._id;

    console.log(isLoggedIn, "isLoggedIn");

    if (loading) {
        return <Loading />;
    }

    return isLoggedIn ? <>{children}</> : <Navigate to="/login" />;
};

export default PrivateRoute;
