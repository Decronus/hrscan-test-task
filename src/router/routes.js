import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "../components/protected-route/ProtectedRoute";
import Main from "../pages/Main";
import People from "../pages/People";
import NotFound from "../pages/NotFound";
import Account from "../pages/Account";

export const AppRoutes = ({ user, setUser }) => {
    return (
        <Routes>
            <Route path="/" element={<Main setUser={setUser} />} errorElement={<NotFound />} />
            <Route path="/people" element={<People />} errorElement={<NotFound />} />

            <Route element={<ProtectedRoute user={user} />} errorElement={<NotFound />}>
                <Route path="/account" element={<Account />} errorElement={<NotFound />} />
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};
