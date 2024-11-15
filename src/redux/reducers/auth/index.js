import { deleteUserToken } from '../../../utils/auth.helpers';
import { flattenObjects } from '../../../utils/utils';
import {
	UPDATE_IS_CART_EMPTY,
	USER_LOGIN,
	USER_LOGOUT,
	SET_USER_DATA_LOADING,
} from '../../constants';

const INITIAL_STATE = {
	token: null,
	isCartEmpty: true,
	isUserDataLoading: false,
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case USER_LOGIN:
			const modifiedUserObject = flattenObjects(payload);
			return {
				...state,
				...modifiedUserObject,
				isUserDataLoading: false,
			};

		case USER_LOGOUT:
			deleteUserToken();
			return {
				...INITIAL_STATE,
			};

		case UPDATE_IS_CART_EMPTY:
			return {
				...state,
				isCartEmpty: payload,
			};

		case SET_USER_DATA_LOADING:
			return {
				...state,
				isUserDataLoading: payload,
			};

		default:
			return state;
	}
};

export default authReducer;
