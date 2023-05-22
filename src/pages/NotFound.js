import { useNavigate } from "react-router-dom";
import { Button, Result } from "antd";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="not-found-page">
            <Result
                status="404"
                title="404"
                subTitle="Sorry, page does not exists"
                extra={
                    <Button type="primary" onClick={() => navigate("/")}>
                        На главную
                    </Button>
                }
            />
        </div>
    );
};

export default NotFound;
