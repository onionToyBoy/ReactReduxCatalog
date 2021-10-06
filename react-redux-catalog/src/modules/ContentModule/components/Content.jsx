import React, { useState, useEffect } from 'react';

import styles from './Content.module.css';
import { BeerList } from './BeerList';

export const Content = () => {
	const [searchValue, setSearchValue] = useState('');

	const createCross = () => {
		return <div className={styles.cross} onClick={()=>setSearchValue('')}>х</div>;
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
				{searchValue && createCross()}
			</div>
			<BeerList searchValue={searchValue}/>
		</div>
	);
};
