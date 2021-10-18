import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './Header.module.css';
import { setFormStatus, setAuthorizationStatus } from '../../../store/header/actions';
import { CART_SRC, PATH_TO_CART } from '../../../constants/constants';
import { selectAuthorizationStatus } from '../../../store/header/selectors';

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
				<Link to={PATH_TO_CART}>
					<img src={CART_SRC} alt='cart' className={styles.cart} />
				</Link>
				<div className={styles.logIn} onClick={isLogged ? onLogOut : onLogIn}>
					{isLogged ? 'Log out' : 'Log in'}
				</div>
			</div>
		</nav>
	);
};
