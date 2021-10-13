import {
	SET_FORM_STATUS,
	SET_AUTHORIZATION_STATUS,
} from '../../../constants/actionTypes';

export const INITIAL_STATE = {
	formIsOpen: false,
	isLogged: false,
};

export const headerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_FORM_STATUS:
			return {
				...state,
				formIsOpen: action.payload,
			};
		case SET_AUTHORIZATION_STATUS:
			return {
				...state,
				isLogged: action.payload,
			};
		default:
			return state;
	}
};
