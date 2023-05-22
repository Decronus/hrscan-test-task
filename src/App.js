import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import { AppRoutes } from "./router/routes";

function App() {
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        if (localStorage.getItem("user")) {
            setUser(JSON.parse(localStorage.getItem("user")));
        }
    }, []);

    console.log("user", user);

    return (
        <>
            <Header user={user} setUser={setUser} />
            <div className="content-block">
                <AppRoutes user={user} setUser={setUser} />
            </div>
        </>
    );
}

export default App;
