import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

const Paths = [
	{
		path: "/",
		exact: true,
		component: HomePage,
	},
	{
		path: "/login",
		exact: true,
		component: LoginPage,
	},
	{
		path: "/register",
		exact: true,
		component: RegisterPage,
	},
];
export default Paths;
