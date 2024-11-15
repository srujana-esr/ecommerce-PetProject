import CustomImage from '../assets/images/nike.webp';

export const replaceImgSrc = (data) => {
	return data.map((product) => ({
		...product,
		image: CustomImage,
	}));
};

export const getUsersFirstName = (username) => {
	return username.split(' ')[0];
};
