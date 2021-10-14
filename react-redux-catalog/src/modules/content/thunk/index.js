import { getBeerList, searchRequest} from '../../../requests/';
import { setBeer, setLoadingStatus } from '../actions';

export function getBeer(beerPage) {
	return async (dispatch) => {
		try {
			dispatch(setLoadingStatus(true));

			const beer = await getBeerList(beerPage);
			console.log('ZAPROSIK')
			dispatch(setBeer(beer,beerPage));
		} catch (err) {
			console.log('Error');
		} finally {
			dispatch(setLoadingStatus(false));
		}
	};
}

export function searchBeer( searchValue) {
	return async (dispatch) => {
		try {
			dispatch(setLoadingStatus(true));

			const beer = await searchRequest(searchValue);
			console.log('ZAPROSIK')
			dispatch(setBeer(beer));
		} catch (err) {
			console.log('Error');
		} finally {
			dispatch(setLoadingStatus(false));
		}
	};
}