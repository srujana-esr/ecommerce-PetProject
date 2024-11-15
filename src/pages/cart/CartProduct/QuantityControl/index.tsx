import { FC } from 'react';
import { useMutation } from '@apollo/client';
import { Container } from './index.styles';
import Loader from '../../../../ui/atoms/Loader';
import { initCart } from '../../../../redux/actions';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../../../graphql/mutations';
import { useAppDispatch } from '../../../../hooks/reduxHooks';
import IconContainer from '../../../../ui/atoms/IconContainer';

type Props = {
	id: string;
	qty: number;
	price: number;
	productId: string;
}

const QuantityControl: FC<Props> = ({ id, qty, price, productId }) => {
	const dispatch = useAppDispatch();

	/**
	 * TODO: Create an aciton to just update the quantity and price for the specific product.
	 */
	const [ updateProductQty, {
		loading: updateQtyLoading,
		// error: updateQtyError 
	} ] = useMutation(ADD_TO_CART, {
		onCompleted: (data) => {
			dispatch(initCart(data.updateCart));
		},
		onError: (error) => {
			console.log({ error });
			// setIsError(true);
		},
	});

	const [ removeFromCart, {
		loading: removeFromCartLoading,
		// error: removeFromCartError 
	} ] = useMutation(REMOVE_FROM_CART, {
		onCompleted: (data) => {
			dispatch(initCart(data.removeFromCart));
		},
		onError: (error) => {
			console.log({ error });
			// setIsError(true);
		},
	});

	const handleIncreaseQty = () => {
		let quantity = qty + 1;
		updateProductQty({
			variables: {
				input: [
					{
						productId,
						price: parseFloat(price * quantity),
						qty: quantity,
					},
				],
			},
		});
	};

	const handleDecreaseQty = () => {
		let quantity = qty - 1;

		if (quantity !== 0) {
			updateProductQty({
				variables: {
					input: [
						{
							productId,
							price: parseFloat(price * quantity),
							qty: quantity,
						},
					],
				},
			});
		} else {
			removeFromCart({
				variables: { productId },
			});
		}
	};

	return (
		<Container>
			{(updateQtyLoading || removeFromCartLoading) && (
				<Loader className='loader' />
			)}
			<IconContainer
				onClick={handleDecreaseQty}
				name='remove'
			/>

			<p>{qty}</p>

			<IconContainer
				onClick={handleIncreaseQty}
				name='add'
			/>
		</Container>
	);
};

export default QuantityControl;
