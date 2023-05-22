import { useState } from "react";
import LoginForm from "../components/login-form/LoginForm";
import RegForm from "../components/reg-form/RegForm";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Main = ({ user, setUser }) => {
    const [loginFormVisibility, setLoginFormVisibility] = useState(true);
    const navigate = useNavigate();

    return (
        <div className="main-page">
            {user?.email ? (
                <div className="main-page-logged">
                    <p>You are logged in as {user?.email}</p>
                    <Button type="primary" onClick={() => navigate("/account")}>
                        To account
                    </Button>
                </div>
            ) : loginFormVisibility ? (
                <LoginForm setLoginFormVisibility={setLoginFormVisibility} setUser={setUser} />
            ) : (
                <RegForm setLoginFormVisibility={setLoginFormVisibility} />
            )}
        </div>
    );
};

export default Main;
