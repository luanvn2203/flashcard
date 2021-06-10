import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Checkbox } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Images from "../../constants/Images";
import "../../assets/css/account.css";

const LoginPage = () => {
	const [Values, setValues] = useState({});

	const onFinish = (values) => {
		setValues(values);

	};

	console.log("Received values of form: ", Values);
	return (
		<div className="limiter">
			<div className="container">
				<div className="wrap">
					<div className="pic js-tilt" data-tilt>
						<img src={Images.LOGIN_SVG} alt="login" />
					</div>

					<Form
						name="normal_login"
						className="form-control"
						initialValues={{ remember: true }}
						onFinish={onFinish}
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
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
