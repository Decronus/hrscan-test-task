import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/protected-route/ProtectedRoute";
import Main from "../pages/Main";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";

export const AppRoutes = ({ user, setUser }) => {
    return (
        <Routes>
            <Route path="/" element={<Main setUser={setUser} errorElement={<NotFound />} />} />
            <Route element={<ProtectedRoute user={user} />}>
                <Route path="/account" element={<Profile />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
