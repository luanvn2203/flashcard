import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../assets/css/footer.css";

function Footer() {
	return (
		<Router>
			<footer className="footer section bd-container">
				<div className="footer__container bd-grid">
					<div className="footer__content">
						<h3 className="footer__title">
							<Link href="#" className="footer__logo">
								Flashcard
							</Link>
						</h3>
						<span className="footer__description">Learning tool systems</span>
						<div>
							<Link href="#" className="footer__social">
								<FaFacebook />
							</Link>
							<Link href="#" className="footer__social">
								<FaYoutube />
							</Link>
							<Link href="#" className="footer__social">
								<FaInstagram />
							</Link>
						</div>
					</div>

					<div className="footer__content">
						<h3 className="footer__title">Subject</h3>
						<ul>
							<li>
								<Link href="#" className="footer__link">
									Languages
								</Link>
							</li>
							<li>
								<Link href="#" className="footer__link">
									Math
								</Link>
							</li>
							<li>
								<Link href="#" className="footer__link">
									Science
								</Link>
							</li>
							<li>
								<Link href="#" className="footer__link">
									Social Science
								</Link>
							</li>
						</ul>
					</div>

					<div className="footer__content">
						<h3 className="footer__title">Feature</h3>
						<ul>
							<li>
								<Link href="#" className="footer__link">
									Quiz live
								</Link>
							</li>
							<li>
								<Link href="#" className="footer__link">
									Video traning
								</Link>
							</li>
							<li>
								<Link href="#" className="footer__link">
									Supporter
								</Link>
							</li>
							<li>
								<Link href="#" className="footer__link">
									Terms of services
								</Link>
							</li>
						</ul>
					</div>

					<div className="footer__content">
						<h3 className="footer__title">Address</h3>
						<ul>
							<li>District</li>
							<li>Ho Chi Minh</li>
							<li>999 - 888 - 777</li>
							<li>flashcard@gmail.com</li>
						</ul>
					</div>
				</div>
				<p className="footer__copy">&#169; 2021 Flashcard Team.</p>
			</footer>
		</Router>
	);
}
export default Footer;
