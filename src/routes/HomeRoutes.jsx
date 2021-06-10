import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { PATH } from "../constants/Paths";
import Loading from "../components/Loading";
const Home = lazy(() => import("../pages/Home/HomePage"));

function HomeRoutes() {
	return (
		<Switch>
			<Route
				path={PATH.HOME}
				component={() => (
					<Suspense fallback={<Loading />}>
						<Home />
					</Suspense>
				)}
			/>
		</Switch>
	);
}
export default HomeRoutes;
