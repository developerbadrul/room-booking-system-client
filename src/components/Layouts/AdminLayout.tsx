import { Outlet } from "react-router-dom";

const AdminLayout = () => {
    return (
        <div>
            Admin Deshboard
            <Outlet/>
        </div>
    );
};

export default AdminLayout;