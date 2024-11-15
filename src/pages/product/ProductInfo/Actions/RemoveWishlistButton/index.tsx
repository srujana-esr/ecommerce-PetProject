import React, { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import { removeFromWishlist as updateReduxWishlist } from '../../../../../redux/actions';
import { REMOVE_FROM_WISHLIST } from '../../../../../graphql/mutations';
import { selectDefaultWishlistId, selectLoggedInUsersToken } from '../../../../../redux/selectors';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks';
import ButtonContainer from '../../../../../ui/molecules/ButtonContainer';
import { SecondaryButton } from '../index.styles';

type Props = {
	productId: number;
}

const RemoveFromWishlistButton: FC<Props> = ({ productId }) => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const isUserLoggedIn = !!useAppSelector(selectLoggedInUsersToken);
	const defaultWishlistId = useAppSelector(selectDefaultWishlistId);
	const [ isError, setIsError ] = useState(false);

	const [ removeFromWishlist, { loading, data } ] = useMutation(REMOVE_FROM_WISHLIST, {
		onCompleted: (data) => {
			dispatch(updateReduxWishlist({
				id: defaultWishlistId,
				productId
			}))
		},
		onError: (error) => {
			setIsError(true);
		},
	});

	useEffect(() => {
		if (isError) {
			setTimeout(() => {
				setIsError(false);
			}, 1000);
		}
	}, [ isError ]);

	const handleRemoveFromWishlist = () => {
		if (!isUserLoggedIn) {
			history.push('/login', {
				from: history.location.pathname,
			});
			return;
		}

		removeFromWishlist({
			variables: {
				productId,
				wishlistId: defaultWishlistId
			},
		});
	};

	// return (
	// 	<div className='button_container'>
	// 		{loading && <Loader style={{ borderRadius: '3px' }} />}
	// 		{data && (
	// 			<div className='icon_container'>
	// 				<ion-icon
	// 					name='checkmark-circle'
	// 					class='login_success' />
	// 			</div>
	// 		)}

	// 		{isError && (
	// 			<div className='icon_container'>
	// 				<ion-icon
	// 					name='close-circle'
	// 					class='login_failed'></ion-icon>
	// 			</div>
	// 		)}
	// 		<Button
	// 			label='Remove from Cart'
	// 			onClick={handleRemoveFromCartClick}
	// 		/>
	// 	</div>
	// );

	const handleOnResetFeedback = () => {
		setIsError(false);
	}

	return (
		<ButtonContainer
			isError={isError}
			isLoading={loading}
			isSuccess={data?.removeFromWishlist}
			onResetFeedback={handleOnResetFeedback}
			containerMargin='20px 0 0 0'
		>
			<SecondaryButton onClick={handleRemoveFromWishlist}>
				Remove from Wishlist
			</SecondaryButton>
		</ButtonContainer>
	)
};

export default RemoveFromWishlistButton;
