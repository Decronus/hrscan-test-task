import "./style.css";
import { LockOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

const LoginForm = ({ setLoginFormVisibility }) => {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    return (
        <div className="login-form-wrap">
            <p>Log in</p>

            <Form name="login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, message: "Please input email!" }]}>
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: "Please input password!" }]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item>
                    <div className="submit-button-wrap">
                        <Button type="primary" htmlType="submit">
                            Log in
                        </Button>
                        <div className="submit-button-wrap-text">
                            Or <p onClick={() => setLoginFormVisibility(false)}>sign up</p>
                        </div>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default LoginForm;
