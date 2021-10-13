import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectFormStatus } from '../selectors';
import styles from './Header.module.css';
import { setFormStatus } from '../actions';

export const Header = () => {
	const dispatch = useDispatch();

	const formStatus = useSelector(selectFormStatus);

	const checkIsFormOpen = () => {
		formStatus ? dispatch(setFormStatus(false)) : dispatch(setFormStatus(true));
		console.log(formStatus);
	};

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
				<div className={styles.logIn} onClick={checkIsFormOpen}>
					Log in
				</div>
			</div>
		</nav>
	);
};
