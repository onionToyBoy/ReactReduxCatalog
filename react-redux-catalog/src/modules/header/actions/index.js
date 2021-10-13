import {
	SET_FORM_STATUS,
	SET_AUTHORIZATION_STATUS,
} from '../../../constants/actionTypes';

export const setFormStatus = (status) => ({
	type: SET_FORM_STATUS,
	payload: status,
});

export const setAuthorizationStatus = (status) => ({
	type: SET_AUTHORIZATION_STATUS,
	payload: status,
});
