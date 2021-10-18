export const selectFormStatus = (state) => state.headerReducer.formIsOpen;

export const selectAuthorizationStatus = (state) =>
	state.headerReducer.isLogged;
