import { useState } from "react";
import LoginForm from "../components/login-form/LoginForm";
import RegForm from "../components/reg-form/RegForm";

const Main = ({ setUser }) => {
    const [loginFormVisibility, setLoginFormVisibility] = useState(true);

    return (
        <div className="main-page" style={{ width: "100%", display: "flex", justifyContent: "center" }}>
            {loginFormVisibility ? (
                <LoginForm setLoginFormVisibility={setLoginFormVisibility} setUser={setUser} />
            ) : (
                <RegForm setLoginFormVisibility={setLoginFormVisibility} />
            )}
        </div>
    );
};

export default Main;
