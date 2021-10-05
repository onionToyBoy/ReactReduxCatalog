import React from 'react';

import styles from './BeerCard.module.css';
import { Button } from './Button';

export const BeerCard = ({ item }) => {
	const { name, description, image_url } = item;
	return (
		<section className={styles.container}>
			<div className={styles.name}>{name}</div>
			<div className={styles.infoBlock}>
				<img src={image_url} alt={name} className={styles.image} />
				<div className={styles.description}>{description}</div>
			</div>
			<div className={styles.button}>
				<Button text={'Add to cart'} />
			</div>
		</section>
	);
};
