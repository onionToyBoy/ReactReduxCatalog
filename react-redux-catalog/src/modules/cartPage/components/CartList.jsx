import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './CartList.module.css';
import emptyCart from '../../../images/emptyCart.png';
import { CartItem } from './CartItem';
import { emptyTheCart } from '../../../store/cart/actions';
import { selectCartList, selectCurrentPage } from '../../../store/beers/selectors';
import { Button } from '../../../componenets/Button';

export const CartList = () => {
	const cartList = useSelector(selectCartList);
	const currentPage = useSelector(selectCurrentPage);

	const dispatch = useDispatch();

	const onEmpty = () => {
		dispatch(emptyTheCart());
	};

	return (
		<div className={styles.content}>
			<div className={styles.buttonsBlock}>
				<Link to={`/page${currentPage}`}>
					<Button text='To the homepage' />
				</Link>
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
