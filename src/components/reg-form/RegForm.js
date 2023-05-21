import "./style.css";
import { LockOutlined, MailOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Radio, Upload, message } from "antd";
import { useRef, useState } from "react";

const RegForm = ({ setLoginFormVisibility }) => {
    const [file, setFile] = useState(null);
    const uploadInputRef = useRef();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
    };

    const handleUpload = (event) => {
        const file = event.target.files[0];
        setFile(file);
        console.log("Uploaded file:", file);
    };

    const uploadProps = {
        name: "file",
        action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
        headers: {
            authorization: "authorization-text",
        },
        onChange(info) {
            if (info.file.status !== "uploading") {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === "done") {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === "error") {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
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

                <Form.Item>
                    <input
                        style={{ visibility: "hidden", position: "absolute", left: "-1000px" }}
                        type="file"
                        accept="image/jpeg, image/png"
                        onChange={handleUpload}
                        ref={uploadInputRef}
                    />
                    <Button icon={<UploadOutlined />} onClick={() => uploadInputRef.current.click()}>
                        Upload photo
                    </Button>
                    {file && <p style={{ fontSize: "12px" }}>{file.name}</p>}
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
