import React, { useState } from "react";
import "antd/dist/antd.css";
import { Form, Input, Button, Select, Radio } from "antd";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	Redirect,
} from "react-router-dom";
import Images from "../../constants/Images";
import "../../assets/css/account.css";
import LoginPage from "../Login/LoginPage";

const RegisterPage = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	const [value, setValue] = React.useState(1);
	const onChange = (e) => {
		console.log("radio checked", e.target.value);
		setValue(e.target.value);
	};
	return (
		<div>
			<div className="limiter">
				<div className="container">
					<div className="wrap">
						<div className="pic js-tilt" data-tilt>
							<img src={Images.SIGNUP_SVG} alt="IMG" />
						</div>

						<Form
							name="normal_login"
							className="form-control"
							initialValues={{ remember: true }}
							onFinish={onFinish}
						>
							<span className="form-control-title">Register From</span>
							<Form.Item
								name="email"
								className="form-group"
								rules={[
									{ required: true, message: "Please input your Email!" },
								]}
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
							<Form.Item
								name="fullname"
								className="form-group"
								rules={[
									{ required: true, message: "Please input your Fullname!" },
								]}
							>
								<Input
									className="form-input"
									type="text"
									placeholder="Fullname"
									required
								/>
							</Form.Item>
							<Form.Item
								name="phone"
								className="form-group"
								rules={[
									{ required: true, message: "Please input your Phone!" },
								]}
							>
								<Input
									className="form-input"
									type="number"
									placeholder="Phone"
									required
								/>
							</Form.Item>
							<Form.Item
								name="address"
								className="form-group"
								rules={[
									{ required: true, message: "Please input your Address!" },
								]}
							>
								<Input
									className="form-input"
									type="text"
									placeholder="Address"
									required
								/>
							</Form.Item>
							<Form.Item
								name="dob"
								className="form-group"
								rules={[
									{
										required: true,
										message: "Please input your Date of birth!",
									},
								]}
							>
								<Input
									className="form-input"
									type="date"
									placeholder="Date of birth"
									required
								/>
							</Form.Item>
							<Form.Item name="role" className="form-group">
								<Select defaultValue="student">
									<Select.Option value="student">Student</Select.Option>
									<Select.Option value="donor">Donor</Select.Option>
								</Select>
							</Form.Item>
							<Radio.Group
								className="form-group"
								onChange={onChange}
								defaultValue={value}
							>
								<Radio value={1}>Male</Radio>
								<Radio value={2}>Female</Radio>
								<Radio value={3}>Other</Radio>
							</Radio.Group>
							<div name="rule" className="form-group">
								By clicking you agree with our{" "}
								<Link className="link-a" to="">
									Term of use.
								</Link>
							</div>

							<Form.Item className="form-group">
								<Button htmlType="submit" className="form-control-btn">
									Register
								</Button>
							</Form.Item>
							<div className="form-group text-center p-t-50">
								Already account{" "}
								<Link className="link-a" to="/login">
									Login
								</Link>
							</div>
						</Form>
					</div>
				</div>
			</div>


		</div>
	);
};

export default RegisterPage;
