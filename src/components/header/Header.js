import { Button } from "antd";
import "./style.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <header className="header-block">
            <nav className="header-menu">
                <p onClick={() => navigate("/")}>Main</p>
                <p onClick={() => navigate("/people")}>Accounts</p>
                <p onClick={() => navigate("/account")}>Profile</p>
            </nav>
            <Button type="primary">Logout</Button>
        </header>
    );
};

export default Header;
