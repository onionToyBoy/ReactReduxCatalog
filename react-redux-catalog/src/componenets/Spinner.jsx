import React from 'react';

import styles from './Spinner.module.css';

export const Spinner = () => {
	return (
		<div className={styles.container}>
			 <div className={styles.spinner}>
				<div className={styles.loader}>Loading...</div>
			</div>
		</div>
	);
};
