import {
	UPDATE_IS_CART_EMPTY,
	USER_LOGIN,
	USER_LOGOUT,
	USER_SIGNUP,
	SET_USER_DATA_LOADING,
} from '../../constants';

export const userLogin = (payload) => ({
	type: USER_LOGIN,
	payload,
});

export const userSignup = (payload) => ({
	type: USER_SIGNUP,
	payload,
});

export const userLogout = () => ({
	type: USER_LOGOUT,
});

export const updateIsCartEmpty = (payload) => ({
	type: UPDATE_IS_CART_EMPTY,
	payload,
});

export const setIsUserDataLoading = (payload) => ({
	type: SET_USER_DATA_LOADING,
	payload,
});
