import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import "../assets/css/header.css";

function Header() {
	const [isActive, setActive] = useState(false);
	const handleToggle = () => {
		setActive(!isActive);
	};

	return (
		<div>
			<header className="l-header" id="header">
				<nav className="nav bd-container">
					<Link to="/" className="nav__logo">
						Flashcard
					</Link>
					<div className="simple-search">
						<input type="email" />
						<button>
							<FaSearch />
						</button>
					</div>
					<div
						className={`nav__menu ${isActive ? "show-menu" : ""}`}
						id="nav-menu"
					>
						<ul className="nav__list">
							<li className="nav__item">
								<Link to="/login" className="nav__link">
									Login
								</Link>
							</li>
							<li className="nav__item">
								<Link to="/register" className="nav__link">
									Register
								</Link>
							</li>
						</ul>
					</div>
					<div className="nav__toggle" id="nav-toggle">
						<FaBars onClick={() => setActive(!isActive)} />
					</div>
				</nav>
			</header>
		</div>
	);
}
export default Header;
