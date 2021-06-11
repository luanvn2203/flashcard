import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaSearch, FaBars } from "react-icons/fa";
import "../assets/css/header.css";
import accountApi from "../api/accountApi";
import { Button } from "antd/lib/radio";
import { Modal } from "antd";

function Header() {
	const [isActive, setActive] = useState(false);
	const [isShowModal, setIsShowModal] = useState(false);
	const handleToggle = () => {
		setActive(!isActive);
	};
	const [isLogin, setIsLogin] = useState(false)
	const [accountDetail, setAccountDetail] = useState({})
	useEffect(() => {
		const getAccountFromLocalStorage = async () => {
			const accessToken = localStorage.getItem("accessToken");
			if (accessToken) {
				setIsLogin(true)
				const accountDetailResponse = await accountApi.getAccountDetailByToken(accessToken);
				setAccountDetail(accountDetailResponse.account)
			}
		}
		getAccountFromLocalStorage()
	}, [isLogin])
	const handleSignOutClick = async () => {
		setIsShowModal(false);
		setIsLogin(false);
		const accessToken = localStorage.getItem("accessToken")
		const response = await accountApi.Logout(accessToken);

		localStorage.removeItem("accessToken");

		//show thong bao
		window.history.forward('/login');
	}
	const showLogoutModal = () => {
		setIsShowModal(true)
	}
	const hideModal = () => {
		setIsShowModal(false);
	}
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
						{isLogin ? <h1>
							<ul className="nav__list">
								<li className="nav__item">
									<Link to="/" className="nav__link">
										{accountDetail.fullName}
									</Link>
								</li>
								<li className="nav__item">
									<Button onClick={() => showLogoutModal()} >
										Sign out
									</Button>
								</li>
							</ul>
						</h1> : <ul className="nav__list">
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
						</ul>}

					</div>
					<div className="nav__toggle" id="nav-toggle">
						<FaBars onClick={() => setActive(!isActive)} />
					</div>
				</nav>
				<Modal
					title="Modal"
					visible={isShowModal}
					onOk={handleSignOutClick}
					onCancel={hideModal}
					okText="Sign out"
					cancelText="Cancel"
				>
					<p>Do you want to sign out ?</p>
				</Modal>
			</header>

		</div>
	);
}
export default Header;
