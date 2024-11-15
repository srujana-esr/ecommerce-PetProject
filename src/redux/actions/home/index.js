import { ADD_PRODUCTS } from '../../constants';

export const addProducts = (payload) => ({
	type: ADD_PRODUCTS,
	payload,
});
