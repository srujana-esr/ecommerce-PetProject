import { Wishlist, WishlistPayload, WishlistProductPayload } from '../../../types/wishlist';
import { ADD_TO_WISHLIST, EMPTY_WISHLIST, INIT_WISHLIST, REMOVE_FROM_WISHLIST } from '../../constants';
import { RESET_WISHLIST_STATE } from '../../constants';

const INITIAL_STATE = {
	count: 0,
	products: [],
	totalPrice: 0.0,
};



const wishlistReducer = (state = [], { type, payload }: {
	type: string, payload: WishlistPayload | WishlistProductPayload
}) => {
	switch (type) {
		case INIT_WISHLIST:
			return [
				...payload.data
			];

		case EMPTY_WISHLIST:
			return [
				...state,
				...state.map((wishlist: Wishlist) => wishlist.id === payload.id && [])
			]

		case RESET_WISHLIST_STATE:
			return []

		case ADD_TO_WISHLIST: {
			console.log('ADD_TO_WISHLIST === ', payload)
			const wishlist: Wishlist = state.filter((wishlist: Wishlist) => wishlist.id === payload.id)[ 0 ];

			const updatedWishlist: Wishlist = {
				...wishlist,
				products: [
					...wishlist.products,
					payload?.product
				]
			}

			return [
				...state.filter((wishlist: Wishlist) => wishlist.id !== payload.id),
				updatedWishlist,
			]
		}

		case REMOVE_FROM_WISHLIST: {
			const wishlist: Wishlist = state.filter((wishlist: Wishlist) => wishlist.id === payload.id)[ 0 ];

			const updatedWishlist: Wishlist = {
				...wishlist,
				products: wishlist.products.filter(product => product.productId !== payload.productId)
			}

			return [
				...state.filter((wishlist: Wishlist) => wishlist.id !== payload.id),
				updatedWishlist,
			]
		}

		default:
			return state;
	}
};

export default wishlistReducer;
