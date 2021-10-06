import { SET_BEER } from '../../../constants/actionTypes';

export const INITIAL_STATE = {
	beer: [],
};

export const beerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_BEER:
			return {
				...state,
				beer: action.payload,
			};
		default:
			return state;
	}
};
