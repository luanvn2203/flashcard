import React, { Suspense } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Paths from "../constants/Paths";
import Loading from "../components/Loading";
import { Switch } from 'react-router';

function Routes() {
	const routeComponents = Paths.map(({ path, component }) => (
		<Route exact path={path} component={component} />

	));
	return (
		<Router>
			<Switch>
				{routeComponents}
			</Switch>
		</Router>
	);
}
export default Routes;
