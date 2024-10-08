import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { loggedInUser, setLoading } from "../redux/features/auth/authSlice";

const useAuthCheck = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        const localAuth = localStorage.getItem("auth");

        if (localAuth) {
            const auth = JSON.parse(localAuth);
            if (auth.token && auth.user) {
                dispatch(loggedInUser({ token: auth.token, data: auth.user }));
            } else {
                dispatch(setLoading(false));
            }
        } else {
            dispatch(setLoading(false));
        }
    }, [dispatch]);
};

export default useAuthCheck;
