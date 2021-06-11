import React from "react";
import { Switch } from 'react-router';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Paths from "../constants/Paths";

function Routes() {
	const routeComponents = Paths.map(({ path, exact, component }) => (
		<Route key={component} exact={exact} path={path} component={component} />

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
