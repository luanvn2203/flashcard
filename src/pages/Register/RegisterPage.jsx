import { Button, Form, Input, Radio, Select } from "antd";
import "antd/dist/antd.css";
import React from "react";
import {
	Link
} from "react-router-dom";
import "../../assets/css/account.css";
import Images from "../../constants/Images";

const RegisterPage = () => {
	const onFinish = (values) => {
		console.log("Received values of form: ", values);
	};
	const [value, setValue] = React.useState(1);
	const onChange = (e) => {
		setValue(e.target.value);
	};
	const initialValue = {
		email: '',
		password: '',
		fullname: '',
		phone: '',
		address: '',
		dob: '',
		role: 1,
		gender: 'male'
	}
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
							initialValues={initialValue}
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
								<Select >
									<Select.Option value={1}>Student</Select.Option>
									<Select.Option value={2}>Donor</Select.Option>
								</Select>
							</Form.Item>
							<Form.Item name="gender" label="Radio.Group">
								<Radio.Group
									className="form-group"
									onChange={onChange}
								>
									<Radio value="male">Male</Radio>
									<Radio value="female">Female</Radio>
									<Radio value="other">Other</Radio>
								</Radio.Group>
							</Form.Item>
							{/* <Radio.Group
								className="form-group"
								onChange={onChange}
								name="gender"
								defaultValue="male"

							>
								<Radio value="male">Male</Radio>
								<Radio value="female">Female</Radio>
								<Radio value="other">Other</Radio>
							</Radio.Group> */}
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
