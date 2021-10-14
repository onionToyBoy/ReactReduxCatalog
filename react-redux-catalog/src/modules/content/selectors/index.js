export const selectBeerList = (page) => (state) => state.beerReducer.beer[page];

export const selectSearchResults = (state) => state.beerReducer.beer.SearchResults;

export const selectCartList = (state) => state.beerReducer.cart;

export const selectIsLoading = (state) => state.beerReducer.isLoading;

export const selectCurrentPage = (state) => state.beerReducer.currentPage;

export const selectOpendPages = (state) => state.beerReducer.beer;
