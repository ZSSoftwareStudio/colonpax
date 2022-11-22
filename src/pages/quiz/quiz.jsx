import React, { useEffect } from 'react';
import '../heroSection/HeroSection.css';
import './quiz.css';
import hero from '../../assets/1.png';
import vagan from '../../assets/Vegan.svg';
import ohne from '../../assets/Ohne Genetic.svg';
import lakto from '../../assets/Group 9.svg';
import gluten from '../../assets/Group 120.svg';
import star from '../../assets/Group 8.svg';
import person from '../../assets/quiz-img-1.png';
import Benefits from './benefits';
import HeaderBox from './headerBox';
import { Link } from 'react-router-dom';

const Quiz = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	return (
		<>
			<div className="quiz">
				<HeaderBox />
				<h2 className="heading-2">Colonpax</h2>

				<div className="hero_section">
					<div className="container">
						<div className="row overflow-hidden">
							<div className="col-md-7 hero_div">
								<h2 className="common_h2">
									{/* Verbessere deine <br /> Darmgesundheit - <br /> Optimiere dein <br /> Körpergewicht */}
									Feeling heaviness in your gut? Have unwanted weight or excess gas?
								</h2>
								<p className="common_p">
									Colonpax is a safe and effective way to relieve constipation, lose weight and
									cleanse your body. Take a quiz to see how it can help you.
								</p>

								<h4 className="bold_tag">Wähle dein Geschlecht:</h4>

								<Link to="/quiz/male">
									<button className="btn_one">MALE</button>
								</Link>
								<Link to="/quiz/female">
									<button className="btn_two">FEMALE</button>
								</Link>

								<br />
								<div className="star">
									<ul>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
										<li>
											<i className="fa-solid fa-star"></i>
										</li>
									</ul>
								</div>

								<p className="little_p">
									„Seitdem ich Colon Broom nehme, ist mein Blähbauch verschwunden und ich habe
									weniger Lust auf Süßes oder Fastfood. Außerdem schmeckt es SO GUT.“
								</p>

								<div className="icon-box">
									<ul>
										<li>
											<img src={vagan} alt="" className="ing-fluid" />
											<span>VEGAN</span>
										</li>
										<li>
											<img src={ohne} alt="" className="ing-fluid" />
											<span>OHNE GENTECHNIK</span>
										</li>
										<li>
											<img src={lakto} alt="" className="ing-fluid" />
											<span>LAKTOSEFREI</span>
										</li>
									</ul>
								</div>
							</div>
							<div className="col-md-5">
								<div className="banner-img-part">
									<img src={person} alt="hero image" className="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Benefits />
		</>
	);
};

export default Quiz;
