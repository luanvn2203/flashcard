import { Button, Checkbox, Form, Input } from "antd";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Link } from "react-router-dom";

LoginForm.propTypes = {
    onSubmit: PropTypes.func,
};
LoginForm.defaultProps = {
    onSubmit: null,
}

function LoginForm(props) {
    const { onSubmit } = props;
    const [values, setValues] = useState({});

    const handleSubmit = (values) => {
        setValues(values);
        console.log(!onSubmit)
        if (!onSubmit) return;
        const formValue = {
            email: values.email,
            password: values.password,
        }
        onSubmit(formValue)
    }
    return (
        <Form
            name="normal_login"
            className="form-control"
            initialValues={{ remember: true }}
            onFinish={handleSubmit}
        >

            <span className="form-control-title">Login From</span>
            <Form.Item
                name="email"
                className="form-group"
                rules={[{ required: true, message: "Please input your Email!" }]}
            >
                <Input
                    className="form-input"
                    type="email"
                    placeholder="Email"
                    required
                />
            </Form.Item>
            <Form.Item
                name="password"
                className="form-group"
                rules={[
                    { required: true, message: "Please input your Password!" },
                ]}
            >
                <Input
                    className="form-input"
                    type="password"
                    placeholder="Password"
                    required
                />
            </Form.Item>
            <Form.Item className="form-group txt2">
                <Form.Item
                    name="remember"
                    className="form-input form-check"
                    valuePropName="checked"
                    noStyle
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Link className="login-form-forgot link-a" to="">
                    Forgot password
                </Link>
            </Form.Item>
            <Form.Item className="form-group">
                <Button htmlType="submit" className="form-control-btn">
                    Login
                </Button>
            </Form.Item>
            <Form.Item className="form-group text-center p-t-50">
                <Link className="link-a" to="/register">
                    Create your account
                </Link>
            </Form.Item>
        </Form>
    );
}

export default LoginForm;