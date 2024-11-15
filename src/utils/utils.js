import { differenceInDays, formatDistance } from 'date-fns';

export const flattenObjects = (obj) => {
	let customObj = {};
	Object.keys(obj).forEach((key) => {
		if (typeof obj[key] === 'object') {
			customObj = {
				...customObj,
				...obj[key],
			};
		} else {
			customObj = {
				...customObj,
				[key]: obj[key],
			};
		}
	});

	return customObj;
};

export const debounce = (func) => {
	let timer;
	return function () {
		let context = this;
		clearTimeout(timer);
		timer = setTimeout(() => {
			func.apply(context, arguments);
		}, 500);
	};
};

export const getDeliveryDate = (isExpress, orderedDate) => {
	const diffInDays = differenceInDays(new Date(), new Date(orderedDate * 1000));

	if (diffInDays === 0) {
		return 'Shipping soon';
	}
	if (isExpress) {
		if (diffInDays >= 3) {
			return 'Delivered';
		}
		return `Arriving in ${3 - diffInDays} day(s)`;
	} else {
		if (diffInDays >= 7) {
			return 'Delivered';
		}
		return `Arriving in ${7 - diffInDays} day(s)`;
	}
};

export const hasWishlistEditAccess = (wishlist, loggedInUserId) => {
	if (wishlist) {
		return wishlist.owner === loggedInUserId || wishlist.users.find(user => user.id === loggedInUserId)?.canEdit;
	}

	return false;
}

export const getDateDistance = (date) => {
	return formatDistance(new Date(parseInt(date)), new Date(), {
		addSuffix: true,
	})
}

export const sortByDate = (item1, item2) => {
	if (item1.placedOn > item2.placedOn) return -1;
	else if (item2.placedOn > item1.placedOn) return 1;
	else return item2.id > item1.id ? 1 : -1;
}