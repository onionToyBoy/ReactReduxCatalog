import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './BeerList.module.css';
import { BeerCard } from './BeerCard';
import { addToCart, removeFromCart } from '../actions';
// import { store } from '../../../store/store';

export const BeerList = ({ data }) => {
	const [cartStatus, setCartStatus] = useState(false);

	const dispatch = useDispatch();

	const changeCartStatus = (item) => {
		if (cartStatus) {
			setCartStatus(false);
			// console.log(store.getState());
			dispatch(removeFromCart(item.id));
		} else {
			setCartStatus(true);
			// console.log(store.getState());
			dispatch(addToCart(item));
		}
	};

	return (
		<div className={styles.container}>
			{data.map((el) => (
				<BeerCard
					key={el.id}
					item={el}
					changeCartStatus={changeCartStatus}
					cartStatus={cartStatus}
				/>
			))}
		</div>
	);
};
