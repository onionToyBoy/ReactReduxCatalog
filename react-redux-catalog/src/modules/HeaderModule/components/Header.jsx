import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.logo}>Task for Andersen</div>
			<NavLink to='/cart' className={styles.navBlock}>
				<img
					src='https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png'
					alt='cart'
					className={styles.cart}
				/>
			</NavLink>
		</nav>
	);
};
