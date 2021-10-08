import React from 'react';

import styles from './Button.module.css';

export const Button = ({ text, fn }) => {
	const chooseButtonStyle = () => {
		return text === 'Add to cart'
			? styles.button
			: styles.button + ' ' + styles.clickedButton;
	};

	return (
		<div className={chooseButtonStyle()} onClick={fn}>
			<div>{text}</div>
		</div>
	);
};
