import React from 'react';
import { Link } from 'react-router-dom';
import '../footer/Footer.css';

const Cards = () => {
	return (
		<div>
			<div className="cards row overflow-hidden text-center position-relative">
				<img src="/images/cards-img-1.png" className="cards-img cards-img-1" alt="" />
				<img src="/images/cards-img-1.png" className="cards-img-2 cards-img" alt="" />
				<div className="container">
					<div className="cards-item text-center">
						<h2 className="card_h2 text-center">
							Charme im Darm – endlich ein neues Darmgefühl, damit Dich nichts mehr aufhält!
						</h2>
						<p className="card_p text-center">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elementum erat eget
							egestas tempus. Mauris commodo ipsum et ex lacinia facilisis.
						</p>

						<button className="card_btn">
							<Link to="/email" className="text-decoration-none text-black">
								PRODUKT ANZEIGEN
							</Link>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cards;
