import { FC, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import { SecondaryButton } from '../index.styles';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks';
import { ADD_TO_WISHLIST } from '../../../../../graphql/mutations';
import ButtonContainer from '../../../../../ui/molecules/ButtonContainer';
import { selectDefaultWishlistId, selectLoggedInUsersToken } from '../../../../../redux/selectors';
import { addToWishlist as updateReduxWishlist } from '../../../../../redux/actions';
import { GET_WISHLIST } from '../../../../../graphql/queries';

type Props = {
	price: string;
	productId: number;
}

const WishlistButton: FC<Props> = ({ price, productId }) => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const isUserLoggedIn = !!useAppSelector(selectLoggedInUsersToken);
	const defaultWishlistId = useAppSelector(selectDefaultWishlistId);
	const [ isError, setIsError ] = useState(false);
	const [ addToWishlist, { loading, data } ] = useMutation(ADD_TO_WISHLIST, {
		onCompleted: () => {
			dispatch(updateReduxWishlist({
				id: defaultWishlistId,
				product: {
					price,
					productId
				}
			}))

		},
		onError: (error) => {
			console.log('ERROR === ', error)
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

	const handleOnClickAddToWishlist = () => {
		if (!isUserLoggedIn) {
			history.push('/login', {
				from: history.location.pathname,
			});
			return;
		}

		addToWishlist({
			variables: {
				wishlistId: defaultWishlistId,
				input: {
					productId,
					price,
				},
			},
		});
	};

	const handleOnResetFeedback = () => {
		setIsError(false);
	}


	return (
		<ButtonContainer
			isError={isError}
			isLoading={loading}
			isSuccess={data?.addToWishlist}
			onResetFeedback={handleOnResetFeedback}
			containerMargin='20px 0 0 0'
		>
			<SecondaryButton onClick={handleOnClickAddToWishlist}>
				Add to Wishlist
			</SecondaryButton>
		</ButtonContainer>
	)
};

export default WishlistButton;
