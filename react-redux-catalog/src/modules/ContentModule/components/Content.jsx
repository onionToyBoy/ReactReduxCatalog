import React, { useState } from 'react';

import styles from './Content.module.css';

export const Content = () => {
	const [searchValue, setSearchValue] = useState('');

	console.log(searchValue);

	return (
		<div className={styles.content}>
			<input
				placeholder='Search...'
				type='text'
				size='40'
				className={styles.input}
			></input>
		</div>
	);
};
