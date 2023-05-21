import "./style.css";
import { LockOutlined, MailOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Radio, Upload } from "antd";

const RegForm = ({ setLoginFormVisibility }) => {
    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    const handleUpload = (file) => {
        // Здесь вы можете выполнить дополнительные операции с загруженным файлом
        console.log("Uploaded file:", file.fileList);
    };

    return (
        <div className="reg-form-wrap">
            <p>Sign up</p>

            <Form name="reg" className="reg-form" initialValues={{ remember: true }} onFinish={onFinish}>
                <Form.Item name="email" rules={[{ required: true, message: "Please input email!" }]}>
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: "Please input password!" }]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item name="repeatPassword" rules={[{ required: true, message: "Please repeat password!" }]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder="Repeat password" />
                </Form.Item>

                <Form.Item name="name" rules={[{ required: true, message: "Please input name!" }]}>
                    <Input prefix={<UserOutlined />} placeholder="Name" />
                </Form.Item>

                <Form.Item className="reg-form-radio" name="gender">
                    <Radio.Group>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item name="birthdate" rules={[{ required: true, message: "Please input date of birth!" }]}>
                    <DatePicker placeholder="Date of birth" />
                </Form.Item>

                <Form.Item name="photo">
                    <Upload beforeUpload={handleUpload}>
                        <Button icon={<UploadOutlined />}>Upload photo</Button>
                    </Upload>
                </Form.Item>

                <Form.Item>
                    <div className="submit-button-wrap">
                        <Button type="primary" htmlType="submit">
                            Sign up
                        </Button>
                        <div className="submit-button-wrap-text">
                            Or <p onClick={() => setLoginFormVisibility(true)}>log in</p>
                        </div>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default RegForm;
