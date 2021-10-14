export const selectBeerList = (state) => state.beerReducer.beer;

export const selectCartList = (state) => state.beerReducer.cart;

export const selectIsLoading = (state) => state.beerReducer.isLoading;

export const selectCurrentPage = (state) => state.beerReducer.currentPage;
