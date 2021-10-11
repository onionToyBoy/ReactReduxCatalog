import React from 'react';
import { useSelector } from 'react-redux';

import styles from './BeerList.module.css';
import { BeerCard } from './BeerCard';
import { selectCartList } from '../selectors';

export const BeerList = ({ data }) => {
	const cartList = useSelector(selectCartList);

	const checkStatus = (id) => {
		return cartList.some((el) => el.id === id);
	};

	return (
		<div className={styles.container}>
			{data.map((el) => (
				<BeerCard key={el.id} item={el} status={checkStatus(el.id)} />
			))}
		</div>
	);
};
