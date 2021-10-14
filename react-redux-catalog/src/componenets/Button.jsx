import React from 'react';

import styles from './Button.module.css';

export const Button = ({ text, fn, color }) => {
	const chooseButtonStyle = () => {
		switch (color) {
			case 'red':
				return `${styles.button} ${styles.redButton}`;
			case 'green':
				return `${styles.button} ${styles.greenButton}`;
			default:
				return styles.button;
		}
	};

	return (
		<div className={chooseButtonStyle()} onClick={fn}>
			<div>{text}</div>
		</div>
	);
};
