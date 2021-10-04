import React from 'react';

import styles from './Button.module.css';

export const Button = ({ text, onSearch }) => {
	return (
		<div className={styles.button} onClick={onSearch}>
			<div>{text}</div>
		</div>
	);
};
