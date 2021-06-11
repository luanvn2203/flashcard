import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import accountApi from "../../api/accountApi";
import "../../assets/css/account.css";
import LoginForm from "../../components/LoginForm";
import Images from "../../constants/Images";
import axios from "axios"
const LoginPage = function () {
	const [loginValue, setLoginValue] = useState({})
	//////

	//////	
	async function handleLoginFormSubmit(formValues) {
		setLoginValue(formValues)
	}

	useEffect(() => {
		const fetchLogin = async () => {
			try {
				const response = await accountApi.Login(loginValue);
				console.log(response)
				if (response.Status === "Success") {
					localStorage.setItem("accessToken", response.tokens)
					//set thong bao here

					//////
					window.history.back();
				}
				/// thong bao here
			} catch (error) {
				console.log("failed to fetch login", error.message)
			}
		}
		fetchLogin();
	}, [loginValue])

	return (
		<div className="limiter">
			<div className="container">
				<div className="wrap">
					<div className="pic js-tilt" data-tilt>
						<img src={Images.LOGIN_SVG} alt="login" />
					</div>
					<LoginForm onSubmit={handleLoginFormSubmit} />
				</div>
			</div>
		</div>
	);
};

export default LoginPage;
