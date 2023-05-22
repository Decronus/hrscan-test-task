import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/protected-route/ProtectedRoute";
import Main from "../pages/Main";
import Profile from "../pages/Profile";

export const AppRoutes = ({ user, setUser }) => {
    return (
        <Routes>
            <Route path="/" element={<Main setUser={setUser} />} />
            <Route element={<ProtectedRoute user={user} />}>
                <Route path="/account" element={<Profile />} />
            </Route>

            {/* <Route path="/verify-popup" element={<VerifyPopup />} />


            <Route element={<ProtectedRouteIsLogin />}>
                <Route path="/login" element={<Login />} />
                <Route path="/reg" element={<Reg />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Route> */}
        </Routes>
    );
};
