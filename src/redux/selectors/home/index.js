export const selectProductFromList = (state, id) =>
	state.home.products.filter((product) => product.id === id)[0];
