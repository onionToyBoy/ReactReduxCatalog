import React from 'react';

import styles from './RadioButton.module.css';

export const RadioButton = ({ label, fn, isSelected, id }) => {
	

	const checkStatus = () => {
		return isSelected ? styles.checkBox + ' ' + styles.selected : styles.checkBox;
	};

	return (
		<div className={styles.container}>
			<div
				className={checkStatus()}
				onClick={()=>fn(id)}
			></div>
			<div className={styles.label}>{label}</div>
		</div>
	);
};
