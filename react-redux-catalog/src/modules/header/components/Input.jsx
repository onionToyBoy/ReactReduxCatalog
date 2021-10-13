import React from 'react';

import styles from './Input.module.css';

export const Input = ({
	text,
	type,
	value,
	onBlur,
	onChange,
	emptyError,
	minLengthError,
	emailError,
}) => {
	const checkError = () => {
		if (emptyError) {
			return `${text} should be filled obligatory!`;
		}
		if (minLengthError) {
			return `${text} should be at least six chars!`;
		}
		if (emailError) {
			return 'Email should contain singe "@" & "." chars';
		}
		return text;
	};

	return (
		<div className={styles.container}>
			<div
				className={
					emptyError || minLengthError || emailError
						? styles.title + ' ' + styles.error
						: styles.title
				}
			>
				{checkError()}
			</div>
			<input
				placeholder={text}
				type={type || 'text'}
				className={styles.input}
				name={type || text.toLowerCase()}
				value={value}
				onBlur={onBlur}
				onChange={onChange}
			/>
		</div>
	);
};
