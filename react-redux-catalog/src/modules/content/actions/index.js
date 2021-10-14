import {
	SET_BEER,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	SET_LOADING_STATUS,
	CHANGE_CURRENT_PAGE,
} from '../../../constants/actionTypes';

export const setBeer = (beer, page = 'SearchResults') => ({
	type: SET_BEER,
	payload: {
		beer,
		page,
	},
});

export const changeCurrentPage = (page) => ({
	type: CHANGE_CURRENT_PAGE,
	payload: page,
});

export const addToCart = (beer) => ({
	type: ADD_TO_CART,
	payload: beer,
});

export const removeFromCart = (key) => ({
	type: REMOVE_FROM_CART,
	payload: key,
});

export const setLoadingStatus = (isLoading) => ({
	type: SET_LOADING_STATUS,
	payload: isLoading,
});
