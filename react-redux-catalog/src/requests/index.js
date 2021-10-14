export const searchRequest = async (searchValue) => {
	try {
		const response = await fetch(
			`https://api.punkapi.com/v2/beers?beer_name=${searchValue}`
		);

		return response.json();
	} catch (e) {
		console.log(new Error(e));
	}
};

export const getBeerList = async (pageNumber) => {
	try {
		const response = await fetch(
			`https://api.punkapi.com/v2/beers?page=${pageNumber}`
		);

		return response.json();
	} catch (e) {
		console.log(new Error(e));
	}
};
