import { FC, useState } from 'react';
import { useHistory } from 'react-router';
import { useMutation } from '@apollo/client';
import { PrimaryButton } from '../index.styles';
import { initCart } from '../../../../../redux/actions';
import { ADD_TO_CART } from '../../../../../graphql/mutations';
import ButtonContainer from '../../../../../ui/molecules/ButtonContainer';
import { selectLoggedInUsersToken } from '../../../../../redux/selectors';
import { useAppDispatch, useAppSelector } from '../../../../../hooks/reduxHooks';

type Props = {
	id?: string;
	price: string;
	productId: number;
}

const CartButton: FC<Props> = ({ price, productId }) => {
	const history = useHistory();
	const dispatch = useAppDispatch();
	const isUserLoggedIn = !!useAppSelector(selectLoggedInUsersToken);
	const [ isError, setIsError ] = useState(false);

	const [ addToCart, { loading, data } ] = useMutation(ADD_TO_CART, {
		onCompleted: (data) => {
			dispatch(initCart(data.updateCart));
		},
		onError: (error) => {
			setIsError(true);
		},
	});

	const handleAddToCartClick = () => {
		if (!isUserLoggedIn) {
			history.push('/login', {
				from: history.location.pathname,
			});
			return;
		}

		addToCart({
			variables: {
				input: [
					{
						productId,
						price: parseFloat(price),
						qty: 1,
					},
				],
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
			isSuccess={data?.updateCart}
			onResetFeedback={handleOnResetFeedback}
		>
			<PrimaryButton onClick={handleAddToCartClick}>
				Add to Cart
			</PrimaryButton>
		</ButtonContainer >
	);

};

export default CartButton;
