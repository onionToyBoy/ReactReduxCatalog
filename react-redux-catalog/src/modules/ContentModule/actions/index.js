import { SET_BEER } from '../../../constants/actionTypes';

export const setBeer = (beer) => ({
	type: SET_BEER,
	payload: beer,
});
