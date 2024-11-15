export const selectCart = (state) => state?.cart;
export const selectCartCount = (state) => state?.cart?.count;
export const selectCartProducts = (state) => state?.cart?.products;
export const selectCartTotalPrice = (state) => state?.cart?.totalPrice;
export const selectIsCartEmpty = (state) => state?.cart?.count === 0;
export const selectCartProductIds = (state) =>
	state?.cart?.products?.map((product) => product.productId);
