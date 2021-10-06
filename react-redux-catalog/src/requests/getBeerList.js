export const getBeerList = async searchValue => {
	try {
		const response = searchValue!==''
			? await fetch(`https://api.punkapi.com/v2/beers?beer_name=${searchValue}`)
			: await fetch('https://api.punkapi.com/v2/beers');
		return response.json();
	} catch(e) {
	console.log(new Error(e))
	}
};
