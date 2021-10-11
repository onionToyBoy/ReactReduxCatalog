import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './CartItem.module.css';
import imageMissing from '../../../images/imageMissing.png';
import { Button } from '../../../componenets/Button';
import { removeFromCart } from '../../content/actions';

export const CartItem = ({ item }) => {
	const { name, image_url, id } = item;

	const dispatch = useDispatch();

	const onRemove = () => {
		dispatch(removeFromCart(id));
	};

	return (
		<div className={styles.container}>
			<div className={styles.name}>{name}</div>
			<div className={styles.imageBlock}>
				<img
					src={image_url == null ? imageMissing : image_url}
					alt={name}
					className={styles.image}
				/>
				<div className={styles.buttonsBlock}>
					<div>
						<Button text='Remove' fn={onRemove} color='red' />
					</div>
					<div>
						<Button text='Pay now' color='green' />
					</div>
				</div>
			</div>
		</div>
	);
};
