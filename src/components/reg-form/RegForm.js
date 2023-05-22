import "./style.css";
import { LockOutlined, MailOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, DatePicker, Form, Input, Radio, message } from "antd";
import { useRef, useState } from "react";
import Queries from "../../services/queries.service";

const RegForm = ({ setLoginFormVisibility }) => {
    const [file, setFile] = useState(null);
    const [birthdate, setBirthdate] = useState(undefined);
    const uploadInputRef = useRef();

    const regUser = (values) => {
        console.log("Received values of form: ", values);

        if (values.password !== values.repeatPassword) {
            message.error("Passwords do not match");
            return;
        }

        if (values.password.length < 8) {
            message.error("Password must be longer than 8 characters");
            return;
        }

        const body = {
            email: values.email,
            password: values.password,
            name: values.name,
            gender: values.gender,
            birthdate: birthdate,
        };

        Queries.regUser(body)
            .then((res) => {
                console.log(res.data);

                if (file) {
                    const form = new FormData();
                    form.append("file", file);
                    Queries.uploadPhoto(res.data._id, form);
                }
            })
            .catch((error) => {
                message.error(error.response?.data);
                console.log(error);
            });
    };

    const handleUpload = (event) => {
        const file = event.target.files[0];
        setFile(file);
    };
    console.log(birthdate);

    return (
        <div className="reg-form-wrap">
            <p>Sign up</p>

            <Form name="reg" className="reg-form" initialValues={{ remember: true }} onFinish={regUser}>
                <Form.Item name="email" rules={[{ required: true, message: "Please input email!" }]}>
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                </Form.Item>

                <Form.Item name="password" rules={[{ required: true, message: "Please input password!" }]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>

                <Form.Item name="repeatPassword" rules={[{ required: true, message: "Please repeat password!" }]}>
                    <Input prefix={<LockOutlined />} type="password" placeholder="Repeat password" />
                </Form.Item>

                <Form.Item name="name">
                    <Input prefix={<UserOutlined />} placeholder="Name" />
                </Form.Item>

                <Form.Item className="reg-form-radio" name="gender">
                    <Radio.Group>
                        <Radio value="male">Male</Radio>
                        <Radio value="female">Female</Radio>
                    </Radio.Group>
                </Form.Item>

                <Form.Item>
                    <DatePicker placeholder="Date of birth" onChange={(date, dateString) => setBirthdate(dateString)} />
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
