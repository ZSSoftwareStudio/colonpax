import React, { useEffect, useState } from 'react';
import '../heroSection/HeroSection.css';
import '../quiz/quiz.css';
import './email.css';
// import HeaderBox from '../quiz/headerBox';
import { useNavigate } from 'react-router-dom';
import EmailComp from '../../component/email';

const Email = () => {
	const navigate = useNavigate();
	const [email, setEmail] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate('/plans');
	};
	const handleInputChange = (e) => {
		const value = e.target.value;
		setEmail(value);
	};

	useEffect(() => {
		console.log(email);
	}, [email]);

	return (
		<>
			<EmailComp submit={handleSubmit} change={handleInputChange} />
		</>
	);
};

export default Email;
