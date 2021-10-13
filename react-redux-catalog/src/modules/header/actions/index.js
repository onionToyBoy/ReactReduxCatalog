import { SET_FORM_STATUS } from '../../../constants/actionTypes';

export const setFormStatus = (status) => ({
	type: SET_FORM_STATUS,
	payload: status,
});
