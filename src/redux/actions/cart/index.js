import {
	ADD_TO_CART,
	EMPTY_CART,
	INIT_CART,
	REMOVE_FROM_CART,
	UPDATE_CART,
} from '../../constants';

export const initCart = (payload) => ({
	type: INIT_CART,
	payload,
});

export const addToCart = (payload) => ({
	type: ADD_TO_CART,
	payload,
});

export const removeFromCart = (payload) => ({
	type: REMOVE_FROM_CART,
	payload,
});

export const emptyCart = (payload) => ({
	type: EMPTY_CART,
	payload,
});

export const updateCart = (payload) => ({
	type: UPDATE_CART,
	payload,
});
