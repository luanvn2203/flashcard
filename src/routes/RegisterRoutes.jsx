import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Loading from "../components/Loading";
import { PATH } from "../constants/Paths";
const Register = lazy(() => import("../pages/Register/RegisterPage"));

function RegisterRoutes() {
	return (
		<Switch>
			<Route
				path={PATH.REGISTER}
				component={() => (
					<Suspense fallback={<Loading />}>
						<Register />
					</Suspense>
				)}
			/>
		</Switch>
	);
}
export default RegisterRoutes;
