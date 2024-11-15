import { RootState } from "../store";
import { Wishlist } from '../../types/wishlist';

export const selectWishlist = (state: RootState) => state.wishlist;
export const selectWishlistProucts = (state: RootState) => state.wishlist?.map((list: Wishlist) => list.products.map(product => product.productId)).flat();
export const selectDefaultWishlistId = (state: RootState) => state.wishlist?.[ 0 ]?.id;
export const selectWishlistIds = (state: RootState) => state?.wishlist?.map((list: Wishlist) => ({
	id: list.id,
	title: list.title
}))