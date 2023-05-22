import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <Result
            status="404"
            title="404"
            subTitle="Извините, такой страницы не существует"
            extra={
                <Button type="primary" onClick={() => navigate("/")}>
                    На главную
                </Button>
            }
        />
    );
};

export default NotFound;
