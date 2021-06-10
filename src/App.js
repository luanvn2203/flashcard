import React from "react";
import Routes from "../src/routes/routes";
import HomePage from "./pages/Home/HomePage";
import LoginPage from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Register/RegisterPage";
import {
	BrowserRouter as Router,
	Route,
	Link,
	Switch
} from 'react-router-dom';

function App() {
	return (
		<Routes />
	)
}

export default App;
