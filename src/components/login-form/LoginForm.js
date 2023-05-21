import "./style.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const LoginForm = () => {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className="login-form-wrap">
            <p>Log in</p>
            <Form name="login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item name="username" rules={[{ required: true, message: "Please input your Username!" }]}>
                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: "Please input your Password!" }]}>
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>

                <Form.Item>
                    <div className="login-button-wrap">
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            Log in
                        </Button>
                        <div className="login-button-wrap-text">
                            Or <p>register</p>
                        </div>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
