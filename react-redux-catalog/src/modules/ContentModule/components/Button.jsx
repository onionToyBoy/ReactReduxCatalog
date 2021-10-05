import React from 'react';

import styles from './Button.module.css';

export const Button = ({ text, fn }) => {
	return (
		<div className={styles.button} onClick={fn}>
			<div>{text}</div>
		</div>
	);
};
