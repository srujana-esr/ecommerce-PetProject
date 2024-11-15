import { ADD_PRODUCTS } from '../../constants';

const INITIAL_STATE = {
	products: [],
};

const homeReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ADD_PRODUCTS:
			return {
				...state,
				products: [...state.products, ...payload.products],
			};

		default:
			return state;
	}
};

export default homeReducer;
