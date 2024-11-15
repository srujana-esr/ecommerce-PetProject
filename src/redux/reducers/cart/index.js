import { EMPTY_CART, INIT_CART } from '../../constants';

const INITIAL_STATE = {
	count: 0,
	products: [],
	totalPrice: 0.0,
};

const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case INIT_CART:
			return {
				...state,
				...payload,
			};

		case EMPTY_CART:
			return {
				...state,
				...INITIAL_STATE,
			};

		default:
			return state;
	}
};

export default cartReducer;
