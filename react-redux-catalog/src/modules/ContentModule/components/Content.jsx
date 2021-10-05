import React, { useState, useEffect } from 'react';

import styles from './Content.module.css';
import { Button } from './Button';
import { BeerList } from './BeerList';

export const Content = () => {
	const [searchValue, setSearchValue] = useState('');

	const onSearch = () => {
		console.log(searchValue);
		setSearchValue('');
	};

	return (
		<div className={styles.content}>
			<div className={styles.serchBar}>
				<input
					placeholder='Enter here...'
					type='text'
					className={styles.input}
					value={searchValue}
					onInput={(text) => setSearchValue(text.target.value)}
				/>
			</div>
			<BeerList />
		</div>
	);
};
