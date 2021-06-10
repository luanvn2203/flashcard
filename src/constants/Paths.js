import HomePage from "../pages/Home/HomePage";
import LoginPage from "../pages/Login/LoginPage";
import RegisterPage from "../pages/Register/RegisterPage";

const Paths = [
	{
		path: "/",
		component: HomePage,
	},
	{
		path: "/login",
		component: LoginPage,
	},
	{
		path: "/register",
		component: RegisterPage,
	},
];
export default Paths;
