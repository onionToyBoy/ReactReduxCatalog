import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './BeerCard.module.css';
import { Button } from './Button';
import { addToCart, removeFromCart } from '../actions';

export const BeerCard = ({ item, status }) => {
	const [cartStatus, setCartStatus] = useState(status);

	const dispatch = useDispatch();

	const { name, description, image_url, abv, ibu, id } = item;

	const changeCartStatus = () => {
		if (cartStatus) {
			dispatch(removeFromCart(id));
			setCartStatus(false);
		} else {
			dispatch(addToCart(item));
			setCartStatus(true);
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.imageBlock}>
				<img src={image_url} alt={name} className={styles.image} />
				<div className={styles.composition}>
					<div>{`Abv: ` + abv}</div>
					<div>{`Ibu: ` + ibu}</div>
				</div>
			</div>

			<div className={styles.infoBlock}>
				<div className={styles.name}>{name}</div>

				<div className={styles.description}>{description}</div>
				<div className={styles.button}>
					<Button
						text={cartStatus ? 'Remove from cart' : 'Add to cart'}
						fn={changeCartStatus}

					/>
				</div>
			</div>
		</div>
	);
};
