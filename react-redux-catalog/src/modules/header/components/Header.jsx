import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Header.module.css';
import { store } from '../../../store/store';
export const Header = () => {
	return (
		<nav className={styles.container}>
			<div className={styles.navBlock}>
				<NavLink to='' className={styles.logo}>
					<span>Task for Andersen</span>
				</NavLink>
				<NavLink to='/cart'>
					<img
						src='https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png'
						alt='cart'
						className={styles.cart}
					/>
				</NavLink>
				<div
					className={styles.logIn}
					onClick={() => console.log(store.getState())}
				>
					Log in
				</div>
			</div>
		</nav>
	);
};
