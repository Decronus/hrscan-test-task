import { Routes, Route } from "react-router-dom";
import Main from "../pages/Main";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />

            {/* <Route path="/verify-popup" element={<VerifyPopup />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/create-suggest" element={<CreateSuggest />} />
                <Route path="/profile" element={<Profile />} />
            </Route>

            <Route element={<ProtectedRouteIsLogin />}>
                <Route path="/login" element={<Login />} />
                <Route path="/reg" element={<Reg />} />
                <Route path="/reset-password" element={<ResetPassword />} />
            </Route> */}
        </Routes>
    );
};
