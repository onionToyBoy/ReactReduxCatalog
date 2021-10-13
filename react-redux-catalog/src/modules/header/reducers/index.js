import { SET_FORM_STATUS } from '../../../constants/actionTypes';

export const INITIAL_STATE = {
	formIsOpen: false,
};

export const headerReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case SET_FORM_STATUS:
			return {
				...state,
				formIsOpen: action.payload,
			};
		default:
			return state;
	}
};
