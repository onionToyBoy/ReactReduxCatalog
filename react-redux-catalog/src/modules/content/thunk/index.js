import { getBeerList } from '../../../requests/getBeerList';
import { setBeer } from '../actions';

export function getBeer(searchValue) {
	return async (dispatch) => {
		try {
			const beer = await getBeerList(searchValue);

			dispatch(setBeer(beer));

			console.log('Norm');
		} catch (err) {
			console.log('Error');
		} finally {
			console.log('End');
		}
	};
}
