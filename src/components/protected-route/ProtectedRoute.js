import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserIsLoginContext } from "../App";

export const ProtectedRoute = ({ redirectPath = "/login" }) => {
    const isLogin = useContext(UserIsLoginContext);
    if (isLogin !== undefined)
        if (!isLogin) {
            return <Navigate to={redirectPath} replace={true} />;
        }

    return <Outlet />;
};
