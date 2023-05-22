import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ redirectPath = "/", user }) => {
    if (!user) {
        return <Navigate to={redirectPath} replace={true} />;
    }

    return <Outlet />;
};
