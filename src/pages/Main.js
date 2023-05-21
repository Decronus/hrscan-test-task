import { useState } from "react";
import LoginForm from "../components/login-form/LoginForm";
import RegForm from "../components/reg-form/RegForm";

const Main = () => {
    const [loginFormVisibility, setLoginFormVisibility] = useState(false);

    return (
        <div className="main-page">
            {loginFormVisibility ? (
                <LoginForm setLoginFormVisibility={setLoginFormVisibility} />
            ) : (
                <RegForm setLoginFormVisibility={setLoginFormVisibility} />
            )}
        </div>
    );
};

export default Main;
