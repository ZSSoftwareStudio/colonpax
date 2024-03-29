import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Weight = () => {
	const [bowelMovement, setBowelMovement] = useState({ text: 0, day: 0 });
	const { healthCollectData, gender, userCollectData } = useSelector((state) => state.counter);
	const [bmi, setBmi] = useState(0);
	const [bmiText, setBmiText] = useState('');
	const [weightChange, setWeightChange] = useState(0);

	useEffect(() => {
		if (healthCollectData.length > 0) {
			healthCollectData[2].map((item) => {
				setBowelMovement({ text: item.text, day: item.day });
			});
		} else {
			return;
		}
	}, [healthCollectData]);

	useEffect(() => {
		const newBmi =
			(+userCollectData.weight / (+userCollectData.height * +userCollectData.height)) * 10000;

		setBmi(newBmi.toFixed(2));
		if (bmi < 18.5) {
			// 'Underweight';
			setBmiText('Du Bist Untergewichtig');
		} else if (18.5 <= bmi && bmi <= 24.9) {
			// 'Healthy';
			setBmiText('Du Hast Dein Idealgewicht');
		} else if (25 <= bmi && bmi <= 29.9) {
			// 'Overweight';
			setBmiText('Du Bist Übergewichtig');
		}
	}, [userCollectData.weight, userCollectData.height, bmi]);

	const weight = 60;
	const desweight = 50;

	useEffect(() => {
		// const value = userCollectData.weight - userCollectData.desiredWeight;
		const value = weight - desweight / 3;
		setWeightChange(value);
		console.log(weightChange);
	}, [userCollectData.weight, userCollectData.desiredWeight, weightChange]);

	return (
		<div>
			<div className="weight-container">
				<div className="container">
					<div className="weight">
						<div className="row g-5">
							<div className="col-12 col-lg-6">
								<div className="item">
									<div className="item-top d-flex justify-content-center flex-column align-items-center">
										<h3 className="heading-3 item-name">Gewicht:</h3>
										<p className="text">basierend auf Deinen Antworten wirst Du:</p>
										<div className="d-flex align-items-center">
											<div className="cur-weight text-capitalize fw-semibold">
												von {userCollectData.weight} Kg auf {userCollectData.desiredWeight} Kg
											</div>
											{/* to
											<h3 className="heading-3 prev-wegiht"></h3> */}
										</div>
									</div>
									<div className="item-chart">
										<div className="chart-wrapper position-relative">
											<img src="/images/chart.svg" alt="" />
											<div className="month month-1">
												<div className="top">
													<div className="point">6 kg</div>
													<div className="dot"></div>
												</div>
												<div className="bottom">Jan</div>
											</div>
											<div className="month month-2">
												<div className="top">
													<div className="point">6 kg</div>
													<div className="dot"></div>
												</div>
												<div className="bottom">fab</div>
											</div>
											<div className="month month-3">
												<div className="top">
													<div className="point">6 kg</div>
													<div className="dot"></div>
												</div>
												<div className="bottom">mar</div>
											</div>
										</div>
									</div>
									<p className="text text-center mt-4 mb-0">
										Nov. 2022 <i className="bi bi-chevron-right"></i> Jan. 2023
									</p>
								</div>
							</div>
							<div className="col-12 col-lg-6">
								<div className="item item-2">
									<div className="item-top text-center">
										<h3 className="heading-3 item-name mb-1">Dein wöchentlicher Stuhlgang</h3>
										<p className="text">
											Colonpax bewirkt eine Verbesserung des Stuhlgangs in 12-72 Stunden
										</p>
										<div className="d-flex justify-content-center align-items-center gap-3">
											<div className="item-date">von: 1 Mal auf</div>
											<h3 className="heading-3 prev-wegiht fw-semibold">{bowelMovement.day} mal</h3>
											<div className="item-date">pro Woche</div>
										</div>
									</div>
									<div className="item-chart">
										<img src="/images/chart-img-2.png" alt="" />
									</div>
									<div className="item-bottom "></div>
								</div>
							</div>
						</div>
						<div className="button-area">
							<Link to="/email" className="btn btn-product text-decoration-none text-white">
								PRODUKT ANZEIGEN
							</Link>
						</div>
					</div>

					{/* Deine */}
					<div className="deine">
						<h2 className="common_h2 common_h2_secondary mb-5 text-center">
							Deine Persönliche Zusammenfassung
						</h2>
						<div className="deine__list">
							<div className="deine__item d-flex align-items-start ">
								<div className="deine__img">
									<img src="/images/deine-img-1.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Geschlecht</h4>
									<p className="text">{gender}</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-2.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Alter</h4>
									<p className="text">{userCollectData.age}</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-3.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Körpergrösse</h4>
									<p className="text">{userCollectData.height} cm</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-4.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Körpergewicht</h4>
									<p className="text">{userCollectData.weight} kg</p>
								</div>
							</div>
						</div>
					</div>

					<div className="deine dain-2">
						<div className="deine__list">
							<div className="deine__item d-flex align-items-start ">
								<div className="deine__img">
									<img src="/images/deine-img-8.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Dein BMI</h4>
									<h2 className="common_h2 common_h2_secondary ">{bmi} kg/m2</h2>
									<p className="text">{bmiText}</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-5.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Stoffwechselalter</h4>
									<h2 className="common_h2 common_h2_secondary ">
										{+userCollectData.age + 7} Jahre
									</h2>
									<p className="text">
										Dein Stoffwechsel ist langsamer als er sein sollte Dein Stoffwechsel ist gut
									</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-6.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Stuhlgang</h4>
									<h2 className="common_h2 common_h2_secondary ">{`${bowelMovement.text} mal pro Woche`}</h2>
									<p className="text">Dein Stuhlgang is viel zu wenig</p>
								</div>
							</div>
							<div className="deine__item d-flex align-items-start">
								<div className="deine__img">
									<img src="/images/deine-img-7.png" alt="" />
								</div>
								<div className="desc">
									<h4 className="heading-4">Candida Albicans</h4>
									<h2 className="common_h2 common_h2_secondary ">45% chance</h2>
									<p className="text">
										Bei dir könnte ein übermäßiges Wachstum des Hefepilzes Candida Albicans
										vorliegen
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Weight;
