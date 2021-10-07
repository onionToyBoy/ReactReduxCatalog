import React from 'react';

import styles from './BeerList.module.css';
import { BeerCard } from './BeerCard';

export const BeerList = ({ data }) => {
	return (
		<div className={styles.container}>
			{data.map((el) => (
				<BeerCard key={el.id} item={el} />
			))}
		</div>
	);
};
