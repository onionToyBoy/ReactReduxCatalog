import { getBeerList, searchRequest } from '../../../requests/';
import { setBeer, setLoadingStatus } from '../actions';

export function getBeer(beerPage) {
	return async (dispatch) => {
		try {
			dispatch(setLoadingStatus(true));

			const beer = await getBeerList(beerPage);

			dispatch(setBeer(beer, beerPage));
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(setLoadingStatus(false));
		}
	};
}

export function searchBeer(searchValue) {
	return async (dispatch) => {
		try {
			dispatch(setLoadingStatus(true));

			const beer = await searchRequest(searchValue);

			dispatch(setBeer(beer));
		} catch (e) {
			console.log(e);
		} finally {
			dispatch(setLoadingStatus(false));
		}
	};
}
