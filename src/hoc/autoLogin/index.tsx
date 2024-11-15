import { useLazyQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GET_USER_BY_ID } from '../../graphql/queries';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setIsUserDataLoading, userLogin } from '../../redux/actions/auth';
import { initCart } from '../../redux/actions/cart';
import { initWishlist } from '../../redux/actions/wishlist';
import { selectLoggedInUsersToken } from '../../redux/selectors/auth';
import {
	checkStorageForActiveUser,
	getUserIdFromToken,
	getUserToken,
} from '../../utils/auth.helpers';

const AutoLoginCheck = ({ children }) => {
	// const dispatch = useDispatch();
	const dispatch = useAppDispatch();
	const userToken = useSelector(selectLoggedInUsersToken);
	const userId = getUserIdFromToken();
	const jwtToken = checkStorageForActiveUser();

	const [ fetchUser, { loading, data } ] = useLazyQuery(GET_USER_BY_ID, {
		onCompleted: (data) => {
			dispatch(
				userLogin({
					...data.getUserById,
					isCartEmpty: data?.getUserById?.userCart?.count === 0 ? true : false,
					token: getUserToken(),
				}),
			);
			dispatch(initCart(data.getUserById.userCart));
			dispatch(initWishlist({
				data: data?.getUserById?.wishlist
			}))
		},
		onError: (err) => {
			console.log('GET_USER_BY_ID fail = ', err);
		},
	});

	useEffect(() => {
		if (userId && !userToken) {
			dispatch(
				userLogin({
					...jwtToken,
					isDispatchedFromRouteGuard: true,
				}),
			);

			dispatch(setIsUserDataLoading(true));
			fetchUser({
				variables: {
					id: userId,
				},
			});
		}
	}, []);

	return <>{children}</>;
};

export default AutoLoginCheck;
