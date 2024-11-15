import { FC, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router';
import { PrimaryButton } from '../index.styles';
import { initCart } from '../../../../../redux/actions';
import { REMOVE_FROM_CART } from '../../../../../graphql/mutations';
import { selectLoggedInUsersToken } from '../../../../../redux/selectors';
import ButtonContainer from '../../../../../ui/molecules/ButtonContainer';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks';

type Props = {
	productId: number;
}

const RemoveFromCartButton: FC<Props> = ({ productId }) => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const isUserLoggedIn = !!useAppSelector(selectLoggedInUsersToken);
	const [ isError, setIsError ] = useState(false);

	const [ removeFromCart, { loading, data } ] = useMutation(
		REMOVE_FROM_CART,
		{
			onCompleted: (data) => {
				dispatch(initCart(data.removeFromCart));
			},
			onError: (error) => {
				setIsError(true);
			},
		},
	);

	const handleRemoveFromCartClick = () => {
		if (!isUserLoggedIn) {
			history.push('/login', {
				from: history.location.pathname,
			});
			return;
		}

		removeFromCart({
			variables: { productId },
		});
	};

	const handleOnResetFeedback = () => {
		setIsError(false);
	}

	return (
		<ButtonContainer
			isError={isError}
			isLoading={loading}
			isSuccess={data?.removeFromCart}
			onResetFeedback={handleOnResetFeedback}
		>
			<PrimaryButton onClick={handleRemoveFromCartClick}>
				Remove from Cart
			</PrimaryButton>
		</ButtonContainer>
	)
};

export default RemoveFromCartButton;
