import "./style.css";
import { LockOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import Queries from "../../services/queries.service";

const EditPasswordForm = ({ user, setUser }) => {
    const [editPassword] = Form.useForm();

    const updatePassword = (values) => {
        const { password, repeatPassword } = values;
        if ((password || repeatPassword) && password !== repeatPassword) {
            message.error("Passwords do not match");
            return;
        }
        if (password.length < 8 || repeatPassword.length < 8) {
            message.error("Password must be longer than 8 characters");
            return;
        }

        const body = {
            password: password,
        };

        Queries.updateUser(user._id, body)
            .then((user) => {
                updateUserState(user.data);
                editPassword.resetFields();
                message.success("Password successefully updated");
            })
            .catch((error) => {
                message.error(error.response?.data);
            });
    };

    const updateUserState = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    return (
        <div className="reg-form-wrap">
            <p>Edit password</p>

            <Form
                form={editPassword}
                name="editPassword"
                className="reg-form"
                initialValues={{ remember: true }}
                onFinish={updatePassword}
            >
                <Form.Item name="password">
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item name="repeatPassword">
                    <Input prefix={<LockOutlined />} type="password" placeholder="Repeat password" />
                </Form.Item>

                <Form.Item>
                    <div className="submit-button-wrap">
                        <Button type="primary" htmlType="submit">
                            Save
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditPasswordForm;
