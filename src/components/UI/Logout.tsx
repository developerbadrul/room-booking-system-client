import { loggedOut } from "../../redux/features/auth/authSlice";
import { useAppDispatch } from "../../redux/hooks";


const LogoutButton: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        localStorage.removeItem("auth");
        dispatch(loggedOut());
    };

    return (
        <button
            onClick={handleLogout}
            className="px-5 py-2 bg-red-600 text-white hover:text-slate-100 hover:bg-red-500 active:bg-red-800 active:text-red-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-red-600 rounded-lg"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
