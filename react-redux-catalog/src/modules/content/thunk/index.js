import { getBeerList } from '../../../requests/getBeerList';
import { setBeer, setLoadingStatus } from '../actions';

export function getBeer(searchValue, beerPage) {
	return async (dispatch) => {
		try {
			dispatch(setLoadingStatus(true));

			const beer = await getBeerList(searchValue, beerPage);

			dispatch(setBeer(beer));
		} catch (err) {
			console.log('Error');
		} finally {
			dispatch(setLoadingStatus(false));
		}
	};
}
