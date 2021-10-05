import React, { useState, useEffect } from 'react';

import styles from './BeerList.module.css';
import { BeerCard } from './BeerCard';

export const BeerList = () => {
	const [isLoading, setLoading] = useState(true);
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch('https://api.punkapi.com/v2/beers')
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => console.error(error))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className={styles.container}>
			{!isLoading && data.map((el) => <BeerCard key={el.id} item={el} />)}
		</div>
	);
};
