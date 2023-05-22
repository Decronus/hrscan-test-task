import "./style.css";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useRef, useState } from "react";
import Queries from "../../services/queries.service";

const EditAccountForm = ({ user, setUser }) => {
    const [editData] = Form.useForm();
    console.log(editData);
    const [file, setFile] = useState(null);
    const uploadInputRef = useRef();

    const updateUser = (values) => {
        console.log(values.name);
        if (values.name && values.name !== user.name) {
            const body = {
                name: values.name,
            };
            Queries.updateUser(user._id, body)
                .then((user) => {
                    updateUserState(user.data);
                    editData.resetFields();
                })
                .catch((error) => {
                    message.error(error.response?.data);
                });
        }

        if (file) {
            const form = new FormData();
            form.append("file", file);
            Queries.uploadPhoto(user._id, form).then((user) => {
                updateUserState(user.data);
                setFile(null);
            });
        }
    };

    const updateUserState = (user) => {
        setUser(user);
        localStorage.setItem("user", JSON.stringify(user));
    };

    const handleUpload = (event) => {
        const file = event.target.files[0];
        setFile(file);
    };

    return (
        <div className="reg-form-wrap">
            <p>Edit account data</p>

            <Form
                form={editData}
                name="editData"
                className="reg-form"
                initialValues={{ remember: true }}
                onFinish={updateUser}
            >
                <Form.Item name="name">
                    <Input prefix={<UserOutlined />} placeholder="Name" />
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
                            Save
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </div>
    );
};

export default EditAccountForm;
