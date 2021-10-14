import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectAuthorizationStatus } from '../selectors';
import styles from './Header.module.css';
import { setFormStatus, setAuthorizationStatus } from '../actions';

export const Header = () => {
	const dispatch = useDispatch();

	const isLogged = useSelector(selectAuthorizationStatus);

	const onLogIn = () => {
		dispatch(setFormStatus(true));
	};

	const onLogOut = () => {
		dispatch(setAuthorizationStatus(false));
		dispatch(setAuthorizationStatus(false));
	};

	return (
		<nav className={styles.container}>
			<div className={styles.navBlock}>
				<div className={styles.logo}>
					<span>Task for Andersen</span>
				</div>
				<Link to='/cart'>
					<img
						src='https://cdn0.iconfinder.com/data/icons/minimal-set-seven/32/minimal-49-512.png'
						alt='cart'
						className={styles.cart}
					/>
				</Link>
				<div className={styles.logIn} onClick={isLogged ? onLogOut : onLogIn}>
					{isLogged ? 'Log out' : 'Log in'}
				</div>
			</div>
		</nav>
	);
};
