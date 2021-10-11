import {
	SET_BEER,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	EMPTY_THE_CART,
} from '../../../constants/actionTypes';

export const INITIAL_STATE = {
	beer: [],
	cart: [],
};

export const beerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_BEER:
			return {
				...state,
				beer: action.payload,
			};
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
		case EMPTY_THE_CART:
			return {
				...state,
				cart: [],
			};
		default:
			return state;
	}
};
