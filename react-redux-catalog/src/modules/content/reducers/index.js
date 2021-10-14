import {
	SET_BEER,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	EMPTY_THE_CART,
	SET_LOADING_STATUS,
	CHANGE_CURRENT_PAGE,
} from '../../../constants/actionTypes';

export const INITIAL_STATE = {
	beer: {},
	cart: [],
	isLoading: false,
	currentPage: '1',
};

export const beerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_BEER:
			const updatedBeer = {
				...state.beer,
				[action.payload.page]: action.payload.beer,
			};
			return {
				...state,
				beer: updatedBeer,
			};
		case CHANGE_CURRENT_PAGE: {
			return {
				...state,
				currentPage: action.payload,
			};
		}
		case ADD_TO_CART: {
			return {
				...state,
				cart: [...state.cart, action.payload],
			};
		}
		case REMOVE_FROM_CART: {
			const updatedCart = state.cart.filter((el) => el.id !== action.payload);

			return {
				...state,
				cart: updatedCart,
			};
		}
		case SET_LOADING_STATUS: {
			return {
				...state,
				isLoading: action.payload,
			};
		}
		case EMPTY_THE_CART:
			return {
				...state,
				cart: [],
			};
		default:
			return state;
	}
};
