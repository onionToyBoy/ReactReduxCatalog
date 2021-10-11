import {
	SET_BEER,
	ADD_TO_CART,
	REMOVE_FROM_CART,
} from '../../../constants/actionTypes';

export const setBeer = (beer) => ({
	type: SET_BEER,
	payload: beer,
});

export const addToCart = (beer) => ({
	type: ADD_TO_CART,
	payload: beer,
});

export const removeFromCart = (key) => ({
	type: REMOVE_FROM_CART,
	payload: key,
});
