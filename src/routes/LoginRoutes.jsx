import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { PATH } from "../constants/Paths";
import Loading from "../components/Loading";
const Login = lazy(() => import("../pages/Login/LoginPage"));

function LoginRoutes() {
	return (
		<Switch>
			<Route
				path={PATH.LOGIN}
				component={() => (
					<Suspense fallback={<Loading />}>
						<Login />
					</Suspense>
				)}
			/>
		</Switch>
	);
}
export default LoginRoutes;
