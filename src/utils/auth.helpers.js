import jwtDecode from 'jwt-decode';

export const getUserToken = () => localStorage.getItem('userToken');

export const deleteUserToken = () => localStorage.removeItem('userToken');

const getDecodedUserToken = () => {
	const token = getUserToken();
	if (token) {
		const decodedToken = jwtDecode(token);
		return decodedToken;
	}

	return null;
};

export const checkStorageForActiveUser = () => {
	const token = getDecodedUserToken();

	if (token) {
		if (token.exp * 1000 < Date.now()) {
			deleteUserToken();
		} else {
			return token;
		}
	}
	return false;
};

export const storeUserTokenInStorage = (token) => {
	if (token) {
		localStorage.setItem('userToken', token);
	}
};

export const getUserIdFromToken = () => {
	const token = checkStorageForActiveUser();
	return token ? token.id : null;
};

// TODO: try turning this into a service
