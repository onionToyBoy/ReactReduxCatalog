export const getBeerList = async (searchValue, pageNumber) => {
	try {
		const response =
			searchValue !== ''
				? await fetch(
						`https://api.punkapi.com/v2/beers?beer_name=${searchValue}`
				  )
				: await fetch(`https://api.punkapi.com/v2/beers?page=${pageNumber}`);
		return response.json();
	} catch (e) {
		console.log(new Error(e));
	}
};

