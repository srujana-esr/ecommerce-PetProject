import { WishlistPayload, WishlistProductPayload } from '../../types/wishlist';
import {
	ADD_TO_WISHLIST,
	EMPTY_WISHLIST,
	INIT_WISHLIST,
	REMOVE_FROM_WISHLIST,
	UPDATE_WISHLIST,
	RESET_WISHLIST_STATE
} from '../constants';

export const initWishlist = (payload: WishlistPayload) => ({
	type: INIT_WISHLIST,
	payload,
});

export const addToWishlist = (payload: WishlistProductPayload) => ({
	type: ADD_TO_WISHLIST,
	payload,
});

export const removeFromWishlist = (payload) => ({
	type: REMOVE_FROM_WISHLIST,
	payload,
});

export const emptyWishlist = (payload) => ({
	type: EMPTY_WISHLIST,
	payload,
});

export const updateWishlist = (payload) => ({
	type: UPDATE_WISHLIST,
	payload,
});

export const resetWishlistState = (payload) => ({
	type: RESET_WISHLIST_STATE,
	payload
})
