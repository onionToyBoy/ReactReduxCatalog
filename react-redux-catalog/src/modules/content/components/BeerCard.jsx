import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import styles from './BeerCard.module.css';
import { Button } from '../../../componenets/Button';
import { addToCart, removeFromCart } from '../../../store/beers/actions';
import imageMissing from '../../../images/imageMissing.png';

export const BeerCard = ({ item, status }) => {
	const [cartStatus, setCartStatus] = useState(status);

	const dispatch = useDispatch();

	const { name, description, image_url, abv, ibu, id, srm } = item;

	const changeCartStatus = () => {
		if (cartStatus) {
			dispatch(removeFromCart(id));
			setCartStatus(false);
		} else {
			dispatch(addToCart(item));
			setCartStatus(true);
		}
	};

	const infoVerification = (info) => {
		return info ? info : '-';
	};

	return (
		<div className={styles.container}>
			<div className={styles.imageBlock}>
				<img
					src={image_url == null ? imageMissing : image_url}
					alt={name}
					className={image_url == null ? styles.withoutImage : styles.image}
				/>
			</div>
			<div className={styles.infoBlock}>
				<h3 className={styles.name}>{name}</h3>
				<div className={styles.composition}>
					<div>{`ABV: ` + infoVerification(abv)}</div>
					<div>{`IBU: ` + infoVerification(ibu)}</div>
					<div>{`SRM: ` + infoVerification(srm)}</div>
				</div>
				<p className={styles.description}>{description}</p>
				<div className={styles.button}>
					<Button
						text={cartStatus ? 'Remove from cart' : 'Add to cart'}
						fn={changeCartStatus}
						color={cartStatus ? 'red' : 'green'}
					/>
				</div>
			</div>
		</div>
	);
};
