import React from 'react';

import styles from './BeerCard.module.css';
import { Button } from './Button';

export const BeerCard = ({ item }) => {
	const { name, description, image_url, abv, ibu } = item;

	return (
		<div className={styles.container}>
			<div className={styles.imageBlock}>
				<img src={image_url} alt={name} className={styles.image} />
				<div className={styles.composition}>
					<div>{`Abv: `+ abv}</div>
					<div>{`Ibu: `+ ibu}</div>
				</div>
			</div>

			<div className={styles.infoBlock}>
				<div className={styles.name}>{name}</div>
				
				<div className={styles.description}>{description}</div>
				<div className={styles.button}>
					<Button text={'Add to cart'} />
				</div>
			</div>
		</div>
	);
};
