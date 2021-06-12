import { Link } from "react-router-dom";
import "../../assets/css/home.css";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Images from "../../constants/Images";

function HomePage() {
	return (
		<div>
			<div>
				<Header />
				<main className="l-main">
					<section className="home" id="home">
						<div className="home__container bd-container bd-grid">
							<div className="home__data">
								<h1 className="home__title">Flashcard</h1>
								<h2 className="home__subtitle">
									Try the learning tool systems.
									<br /> Master any subject, one success at a time.
								</h2>
								<Link to="/register" className="button">
									Get Started
								</Link>
							</div>

							<img src={Images.LEARN_PIC} alt="learn" className="home__img" />
						</div>
					</section>

					<section className="about section bd-container" id="about">
						<div className="about__container  bd-grid">
							<div className="about__data">
								<span className="section-subtitle about__initial">
									Learn faster
								</span>
								<h2 className="section-title about__initial">
									Learn faster with <br /> Flashcards
								</h2>
								<p className="about__description">
									From flashcards to help you learn Languages to games that make
									it easy to understand history, you can use a variety of tools
									to conquer any challenge.
								</p>
								<Link to="/register" className="button">
									Learn with me now
								</Link>
							</div>
							<img
								className="about__img"
								src={Images.FASTER_PIC}
								alt="Home-0"
							/>
						</div>
					</section>

					<section className="services section bd-container" id="services">
						<span className="section-subtitle">Offering</span>
						<h2 className="section-title">Our amazing services</h2>
						<div className="services__container  bd-grid">
							<div className="services__content">
								<img
									className="services__img"
									src={Images.HOME1_PIC}
									alt="Home-1"
								/>
								<h3 className="services__title">
									You bring the brains, we’ll bring everything else
								</h3>
								<p className="services__description">
									From flashcards to help you learn francais, to games that make
									it easy to get a handle on history, use a variety of tools to
									conquer any challenge.
								</p>
							</div>

							<div className="services__content">
								<img
									className="services__img"
									src={Images.HOME2_PIC}
									alt="Home-2"
								/>
								<h3 className="services__title">
									Your next win is just a fact away
								</h3>
								<p className="services__description">
									Each new thing you learn is an achievement. Quizlet breaks
									down topics and subjects, so you accomplish something new
									every step of the way.
								</p>
							</div>

							<div className="services__content">
								<img
									className="services__img"
									src={Images.HOME3_PIC}
									alt="Home-3"
								/>
								<h3 className="services__title">
									Don’t get frustrated. Get it done.
								</h3>
								<p className="services__description">
									When even the smallest lessons feel like a victory, it’s easy
									to keep going.
								</p>
							</div>
						</div>
					</section>

					<section className="menu section bd-container" id="menu">
						<span className="section-subtitle">Subject</span>
						<h2 className="section-title">Daily Lean Flashcard</h2>

						<div className="menu__container bd-grid">
							<div className="menu__content">
								<img src="assets/img/plate1.png" alt="" className="menu__img" />
								<h3 className="menu__name">Languages</h3>
								<Link to="/" className="button menu__button">
									<i className="bx bx-cart-alt"></i>
								</Link>
							</div>

							<div className="menu__content">
								<img
									src="assets/img/plate2.png"
									alt="Home-4"
									className="menu__img"
								/>
								<h3 className="menu__name">Math</h3>
								<Link to="/" className="button menu__button">
									<i className="bx bx-cart-alt"></i>
								</Link>
							</div>

							<div className="menu__content">
								<img
									src="assets/img/plate3.png"
									alt="Home-5"
									className="menu__img"
								/>
								<h3 className="menu__name">Science</h3>
								<Link to="/" className="button menu__button">
									<i className="bx bx-cart-alt"></i>
								</Link>
							</div>

							<div className="menu__content">
								<img
									src="assets/img/plate1.png"
									alt="Home-6"
									className="menu__img"
								/>
								<h3 className="menu__name">IOT</h3>
								<Link to="/" className="button menu__button">
									<i className="bx bx-cart-alt"></i>
								</Link>
							</div>

							<div className="menu__content">
								<img
									src="assets/img/plate2.png"
									alt="Home-7"
									className="menu__img"
								/>
								<h3 className="menu__name">Programing</h3>
								<Link to="/" className="button menu__button">
									<i className="bx bx-cart-alt"></i>
								</Link>
							</div>

							<div className="menu__content">
								<img
									src="assets/img/plate3.png"
									alt="Home-8"
									className="menu__img"
								/>
								<h3 className="menu__name">Design</h3>
								<Link to="/" className="button menu__button">
									<i className="bx bx-cart-alt"></i>
								</Link>
							</div>
						</div>
					</section>

					<section className="app section bd-container">
						<div className="app__container bd-grid">
							<div className="app__data">
								<span className="section-subtitle app__initial">App</span>
								<h2 className="section-title app__initial">App is aviable</h2>
								<p className="app__description">
									Find our application and download it, you can learning
									Flashcard, make quiz and share together.
								</p>
								<div className="app__stores">
									<Link to="/">
										<img
											src={Images.ANDROID_PIC}
											alt="Home-9"
											className="app__store"
										/>
									</Link>
									<Link to="/">
										<img
											src={Images.IPHONE_PIC}
											alt="Home-10"
											className="app__store"
										/>
									</Link>
								</div>
							</div>

							<img src={Images.PHONE_PIC} alt="Home-11" className="app__img" />
						</div>
					</section>

					<section className="contact section bd-container" id="contact">
						<div className="contact__container bd-grid">
							<div className="contact__data">
								<span className="section-subtitle contact__initial">
									Let's talk
								</span>
								<h2 className="section-title contact__initial">Contact us</h2>
								<p className="contact__description">
									If you have any questions or service feedback, please contact
									us. We will respond as soon as possible.
								</p>
							</div>

							<div className="contact__button">
								<Link to="/" className="button">Contact us now</Link>
							</div>
						</div>
					</section>
				</main>
			</div>
			<Footer />
		</div>
	);
}
export default HomePage;
