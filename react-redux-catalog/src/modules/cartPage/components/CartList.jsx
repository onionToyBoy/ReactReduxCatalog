import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import styles from './CartList.module.css';
import emptyCart from '../../../images/emptyCart.png';
import { CartItem } from './CartItem';
import { emptyTheCart } from '../actions';
import { selectCartList } from '../../content/selectors';
import { Button } from '../../../componenets/Button';

export const CartList = () => {
	const cartList = useSelector(selectCartList);

	const dispatch = useDispatch();

	const onEmpty = () => {
		dispatch(emptyTheCart());
	};

	return (
		<div className={styles.content}>
			<div className={styles.buttonsBlock}>
				<NavLink to=''>
					<Button text='To the homepage' />
				</NavLink>
				<div className={cartList.length ? styles.visible : styles.invisible}>
					<div>
						<Button text='Empty the cart' fn={onEmpty} />
					</div>
					<div>
						<Button text='Pay for all' />
					</div>
				</div>
			</div>
			{cartList.length ? (
				cartList.map((el) => <CartItem key={el.id} item={el} />)
			) : (
				<img src={emptyCart} alt={'empty cart'} />
			)}
		</div>
	);
};
