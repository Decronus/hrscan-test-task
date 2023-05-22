import { Button } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Header = ({ user, setUser }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("user");
        setUser(undefined);
    };

    return (
        <header className="header-block">
            <nav className="header-menu">
                <p onClick={() => navigate("/")}>Main</p>
                <p onClick={() => navigate("/people")}>People</p>
                <p onClick={() => navigate("/account")}>Account</p>
            </nav>

            {user && (
                <div className="header-logout-wrap">
                    <p>{user?.name || user?.email}</p>
                    <Button type="primary" onClick={logout}>
                        Log out
                    </Button>
                </div>
            )}
        </header>
    );
};

export default Header;
